# The Test Plan
The test plan describes how we intend to implement the test strategy on a particular project. The test cases in the test
suite provide the specific steps the testers will carry out during test execution, which are the tactics necessary to
implement the plan. Those are two different entities that should be put into different documents.

If the testing on the project have some logically, start time, methodology and end users divided phases or parts, it
worth to think of separate test plans for them.

Multiple test plans can lead to overlapping content, to accumulate common logic for testing we can create a single master
test plan that addresses these common topics and include references to them in the detailed test plans.

While you create a test plan, you can leave [ TBD ] (to be determinated) notes everywhere you are not sure how the things
should work our, and this is the topic of discussion and brainstorming with corresponded team.

Template scope looks like this:
 - Overview
 - Bounds
   - Scope
   - Definitions
   - Setting
 - Quality Risks
 - Proposed Schedule of Milestones
 - Transitions
   - Entry Criteria
   - Continuation Criteria
   - Exit Criteria
 - Test Development
 - Test Configurations and Environments  
 - Test Execution
   - Resources
   - Test Case and Bug Tracking
   - Bug Isolation and Classification
   - Test Release Management
   - Test Cycles
   - Test Hours
 - Risks and Contingencies
 - Change History
 - Referenced Documents
 - Frequently Asked Questions

Overview \
Introduce to the test project, what we plan to test, general test approach, goals, methodologies, and objectives.
We can include simple pictures or charts, concepts of the system architecture under test, the system decomposition for
component or integration testing, or how this test effort fits into other test efforts that might precede, run
concurrently, or follow.

Bounds \
Set boundaries for the test plan by discussing what I will and will not test, defining important terms and acronyms,
determining where and in what context the test efforts will take place.

Scope \
We can use a table. The `Is` column lists the elements included within the scope of a particular test phase.
The `Is Not` column does not specify all elements not covered — just those elements some readers might think we cover.

![scope](/managing_testing_process/media/scope.PNG)

Definitions \
Testing has its own terms and phrases. Table with those can help to clarify terminology for those who are not aware and
set the meanings for the terms for the whole process so there won't be misunderstanding in the team.

Setting \