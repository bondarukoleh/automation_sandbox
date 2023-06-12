# Test System Architecture, Cases, and Coverage

## Test System Architecture and Engineering
By test system, I mean the organizational capability for testing created by the testing processes, the testware, 
and the test environment. \
- The testing processes include both written and unwritten procedures, checklists, and other agreements about the way the
  test team does its testing.
- The testware includes all those tools, documents, scripts, data, cases, tracking mechanisms, and so forth that the test
  team uses to do its testing. 
- The test environment includes the hardware, software, networking and other infrastructure, paper and other supplies,
  facilities, lab, and so forth that the test team procures, installs, and configures the system under test in order to
  test it.

![scope](/managing_testing_process/media/test_system.png)

A good test system helps the tester focus his testing efforts on the key quality risks, and find, reproduce, isolate,
describe, and manage the most important bugs in the software or hardware being tested, as well as capturing and analyzing
key metrics.

![scope](/managing_testing_process/media/testware.PNG)

The *test mission* or test policy is a document that defines the goals of testing. For example, do the goals of testing
include finding defects? Building confidence? Reducing risk? In addition to these goals, the key process indicators or
metrics are defined for determining whether the test team is meeting the goals. The *test strategy* document tells how
— in a project-independent way — to go about fulfilling the goals. The *test plan* implements the test strategy in a way
that fits the project and that achieves the mission as appropriate to the project. The *test architecture* implements the
test strategy in a way that defines how the testware supports the guiding principles of testing in the test strategy.

### The Action Components: Definitions
Three elements of the testware: the test tools, the test case library, and the test suites.
These are the action components, the testware parts that do something. \
A test tool can be any general-purpose hardware, software, or hardware/software system used during test case execution
to set up or tear down the test environment, to create test conditions, or to measure test results.

![scope](/managing_testing_process/media/action_components.PNG)

Test case library, which is a collection of independent, reusable test cases. \
Each test case consists of a sequence of three stages:
 - The test **case setup** describes the steps needed to configure the test environment.
 - The point of running a test case is to create a set of **test conditions**. The creation of these conditions allows
 the tester to assess the quality of the system in relation to particular risks to system quality and customer usage scenarios.
 - The test case teardown specifies the steps required to restore the test environment to a clean condition after execution.

Because test cases are reusable, I can incorporate a test case into one or more suites. In testware, a test suite provides
a framework for the execution of test cases, a way of grouping cases. The test suite allows you to combine test cases to create unique test conditions.

### Principles for Test System Architecture
#### Quality
ISO 9126 characteristics for software quality: functionality, reliability, usability, efficiency, maintainability, and portability. Most important, a well-designed test system provides the functionality you need for your testing projects.
The test system should accurately model end-user hardware, software, and interface environments, and simulate end-user
conditions - fidelity. Especially challenging types of fidelity and probe effect issues arise in performance, stress,
capacity, error handling and recovery, and accelerated-life testing, we need fake it. \
Repeatable, dependable test results are part of a reliable test system. A low degree of coupling between features and 
test cases for them is another attribute of reliability. If you can tets feature A with feature B failing - it's more
reliable. \
Maintainability - flexibility over time. \
Reliability, efficiency, and maintainability are enabled by simplicity. The more bells and whistles you introduce into 
a test system, the wider its footprint.
#### Testers and the Test System
Simplicity of the test system is also essential to usability. The best test systems are easy to learn and easy to use.
I also try to make the test system difficult to misuse, although I find I need to balance this objective against the
costs of complexity. Newcomers is a nice indicator of how your system is simple.
#### Miscellaneous Best Practices and Principles for Quality Test Systems

