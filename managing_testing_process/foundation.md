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

Before start to develop the tests system, the testware, the test environment, and the test process we need to know what
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
