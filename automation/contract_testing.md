# Contract testing

Contract testing is a method used to ensure that the interaction between two components, typically a consumer (FE)
and a provider (BE), keeps to a predefined contract. This is particularly useful in microservices architectures,
where services are highly interdependent.

### Key Concepts of Contract Testing:
**Consumer and Provider:**
- Consumer: The system or service that consumes the API.
- Provider: The system or service that provides the API.

**Contract:** \
A contract is an agreement specifying how the consumer expects the provider to behave. This includes:
- API endpoints.
- Request/response structure (e.g., headers, body, status codes).
- Data formats (e.g., JSON, XML).

**Focus:** \
It focuses on integration testing, but unlike traditional integration testing, it doesn't require the consumer and
provider to be running simultaneously. Instead, it tests whether the provider meets the consumer’s expectations
independently.

### Types of Contract Testing:
**Consumer-Driven Contract Testing:** \
The consumer defines the expectations, and the provider must fulfill them. \
Example tools: Pact. \

**Provider-Driven Contract Testing:** \
The provider defines the contract, and consumers must adhere to it.

#### Why Use Contract Testing?
- Decoupled Development. Developers can work independently on consumers and providers without waiting for the other
side to complete their work. 
- Faster Feedback. Issues in the interaction can be detected early in the development lifecycle. 
- Improved Reliability. Ensures that changes in the provider don’t unintentionally break the consumer.
- Reduced Need for End-to-End Testing. Fewer dependencies compared to traditional integration testing.

### Old integration testing vs Contract testing
![old_way](/automation/media/old_way.PNG)

From the pipeline perspective, build and unit-tests are the same. The difference is in the integration testing phase.
In the old way, the consumer and provider must be running simultaneously, which requires stable, dedicated environment.
Requires coordination between teams, and extra go-no-go phase from QA team.
When you scale the amount of services, developers idle waiting for the other team to finish their work grows, risk grows,
environment management grows, etc.

#### Workflow for Consumer-Driven Contract Testing:
**Consumer Development:** \
With contract testing, the consumer and provider can work independently. Providers develop their versions of API, and 
instead of chasing their consumers (clients) with a new version of API, consumers give providers contracts (specs) what 
they expect to get from provider. And so providers can develop their services to meet the contracts of various consumers.

![Contract_testing](/automation/media/Contract_testing1.PNG)

**Provider Verification:** \
The provider runs tests to verify that it fulfills the contract. Any mismatch indicates a problem that must be resolved.

**Continuous Integration:** \
The contract is often stored in a version control system. CI pipelines ensure the provider always adheres to the latest
contract. 

Example with Pact: \
Consumer: \ 
Creates a Pact file during testing, which describes the expected interactions with the provider.
Example contract:
```json
{
  "provider": {
    "name": "UserService"
  },
  "consumer": {
    "name": "FrontendApp"
  },
  "interactions": [
    {
      "description": "A request for user details",
      "request": {
        "method": "GET",
        "path": "/users/123"
      },
      "response": {
        "status": 200,
        "headers": {
          "Content-Type": "application/json"
        },
        "body": {
          "id": 123,
          "name": "John Doe"
        }
      }
    }
  ]
}

```

Provider: \
Uses the Pact file to test whether it fulfills the consumer's expectations.

Tools for Contract Testing: \
Pact: Widely used for consumer-driven contract testing. \
Spring Cloud Contract: Useful for contract testing in Spring-based applications. \
ContractVerifier: Works with Swagger/OpenAPI specifications. \
Postman: Can be used to validate API contract expectations. \

When to Use Contract Testing:
- Microservices Architectures. To ensure smooth communication between independent services.
- Third-Party Integrations: When relying on external APIs.
- Agile/CI Workflows. For quick validation in fast-paced development environments.

### How does pact work overall?
1. It starts with a Consumer runs Pact tests and generates the pact files (literally "_the agreements_"). Before the tests
are run, the consumer defines the expectations for each API call that it is going to test. So it's the same as you mock the
service during integration testing with WireMock programmatically, except now WireMock (Pact in this case) used generated
pact files not only to provide consumer with the expected responses but also to store them in the Broker as a contracts 
for the provider pact tests.
2. Consumer Pact files are stored in the Broker. (_PactFlow_ is a commercial version of Broker). You can treat generated pact files
like generated Java .class files. You don't need to check them very often, Pact will take care of generating them, same
as Java compiler generates .class files.
3. Provider during the Pact testing pulls the last version of the pact files from the Broker and runs its tests against them, 
this is called contract verification. Pact verifies that:
   - all known consumers for the provider is checked;
   - provider can respond to all requests from all of the consumers;
   - for each request, the provider responds with the expected response (status, headers, body);
4. _can-i-deploy_ command checks if the provider or consumer can be deployed to production. It checks if consumer's provider
has tested last version of the pact files from the Broker, and verification passed, and the version is deployed to the aimed
environment.

### CI with Pact for the Consumer side:
1. Consumer developed a feature. It runs Pact tests and generates pact files.
2. Consumer published Pact files to the Broker.
3. can-i-deploy command checks if the provider has verified the last version of the pact files.
4. If so, the consumer can be deployed. If not, the consumer must wait for the provider to verify the pact files.

If the consumer changed in some way previously added pact files (so they don't match the previous version), potentially
broke the compatibility with the provider. Consumer needs to wait till the provider verifies them. It cannot be deployed
right away. If the contracts are the same as before, and were verified by the provider previously, the consumer can be
deployed. This is the main difference between contract testing and integration testing. You don't need to test against
the provider if you didn't change the contract.

### CI with Pact for the Provider side:
1. Provider developed a feature. It pulls the latest consumers' pact files from the Broker.
2. Provider runs tests against the pact files to verify that it meets the consumers' expectations.
3. Provider publishes the pact files verification results to the Broker.
4. If the verification is successful, the provider can be deployed. If not, the provider must fix the issues and retest.
The beauty is about provider always knows what consumer wants from him. And he can change the contract whatever he wants,
and test it in isolation. If provider didn't break the compatibility with the consumer, he is safe to deploy.

Consumer and provider never talk to each other. They are always talk to Pact Mock. Mock publish / pulls the _pact_ files
from Broker.

### Improving the CI/CD pipeline with Pact:
![standard_pyramid](/automation/media/step1.PNG)
![pyramid_with_CT](/automation/media/step2.PNG)
![pyramid_with_CT_and_prod_test](/automation/media/step4.PNG)

Plus you can always review your levels of testing, and shrink the amount of tests that overlap across the levels and 
consumer/provider tests. With contact testing, you can move expensive business logic tests on consumer levels to the 
contract testing of provider level.
