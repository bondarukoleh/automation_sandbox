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

#### Workflow for Consumer-Driven Contract Testing:
**Consumer Development:** \
The consumer creates a contract describing its expectations from the provider (e.g., expected API responses).
The contract is shared with the provider. 

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