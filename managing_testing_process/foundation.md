Tools you need to build testing:
1. Risk analysis. Sequencing your tests to find bugs. Test triage. Risk based testing.
2. Test plan. Such a plan addresses the issues of scope, quality risk management, test strategy, staffing, resources,
hardware logistics, configuration management, scheduling, phases, major milestones and phase transitions, and budgeting.
3. Well-engineered test system. Good test systems build confidence when the tests pass, produce credible, useful,
timely information, have internal and external consistency, are easy to learn and use, and build on a set of well-behaved
and compatible tools.
4. Bug tracking database.
5. Comprehensive test-tracking spreadsheet. We need to follow the status of each test case, and have statistics, history,
trends, logs.
6. A simple change management database. Place where you track all not-code-related delays of the functionality delivery.
7. A solid business case for testing. Analyze the testing return on investment, based on solid, well established quality
management techniques.

The Resources You Need:
1. A practical test lab with equipment.
2. Test engineers and technicians.
3. Contractors and consultants. 
4. External test labs, testing services providers, and vendors.

## The Foundation of a Test Project

Before start to develop the test system, the test-ware, the test environment, and the test process we need to know what
we _might_ test, then what we _should_ test, and finally what we _can_ test.

### From Microscope to Telescope: Test Granularity
Ideal Testers: Programmers, BB/Net/System Admins, Electrical/Mechanical Engineers
Test Granularity: Structural (White-Box)
=>
Ideal Testers: Test Engineers, Test Technicians, (Some) Programmers
Test Granularity: Behavioral (Black-Box)    
=>
Ideal Testers: Tech Support/Help Desk, Sales/Marketing, Business Analysts/Users
Test Granularity: Live, (Alpha, Beta, or Acceptance)

_Structural (White-Box) Tests_ - find bugs in low-level structural elements such as lines of code, database schemas,
chips, subassemblies, and interfaces. The tester bases structural tests on **how a system operates**, involves a detailed
technical knowledge of the system. <b>
_Behavioral (Black-Box) Tests_ - find bugs in high-level operations, such as major features, operational profiles, and
customer scenarios, **what a system should do**. Behavioral testing involves a detailed understanding of the application
domain, the business problem that the system solves, and the mission the system serves. <b>
_Live Tests_ - involve putting customers, content experts, early adopters, and other end users in front of the system.
Live tests can follow general scripts or checklists, but live tests are often ad hoc (worst case) or exploratory
(best case).

### Test Phases
1. **Unit testing** \
Should focus on the smallest construct that one could meaningfully test in isolation, function, class, etc.
2. **Component or Subsystem Testing** \
Focus on the components of the system. Component testing applies to some collection of units that provide some defined
set of capabilities within the system.
3. **Integration or Product Testing** \
Integration or product testing focuses on the relationships and interfaces between pairs of components and groups of
components in the system under test. Would be great if integration testing can happen in coordination with the
project-level activity of integrating the entire system — putting all the constituent components together, a few
components at a time. The staging of integration and integration testing must follow the same plan — build plan — so that
the right set of components comes together in the right way and at the right time. \
If your product is a set of standalone utilities that don’t share data or invoke one another, you can probably skip this.
However, if the product uses APIs or a HW bus to coordinate activities, share data, and pass control - you need this.
4. **System Testing** \
System testing covers the entire system, fully integrated. Sometimes, as in installation and usability testing, these
tests look at the system from a customer or end-user point of view. Other times, these tests stress particular aspects
of the system that users might not notice, but are critical to proper system behavior. \
Except some blocks of functionality system testing covers installation, performance, compatibility, performance, etc.
5. **Acceptance or User-Acceptance Testing** \
The test objective is to demonstrate that the system meets requirements. When successful it obligates a buyer to accept
a system, triggers deployment to prod. Acceptance tests can be alpha (executed by in-house users) and beta tests (executed
by current and potential customers), focus is usually on typical product-usage scenarios, not extreme conditions.

Benefits of staged testing:
1. Starts early;
2. Finds different level of bugs that can be fixed faster;
3. Measuring testing/fixing efforts is easier, since it leveled;
4. Clear process and milestones.

## What we Should Test?
