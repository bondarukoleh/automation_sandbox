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

**Overview** \
Introduce to the test project, what we plan to test, general test approach, goals, methodologies, and objectives.
We can include simple pictures or charts, concepts of the system architecture under test, the system decomposition for
component or integration testing, or how this test effort fits into other test efforts that might precede, run
concurrently, or follow.

**Bounds** \
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
Describes where I intend to perform the testing (could be different locations) and the way those organizations doing
the testing relate to the rest of the organization. A good place to show testing in an organization setting.

![setting](/managing_testing_process/media/setting.PNG)

**Quality Risks** \
If you already have the material you need for this section. You can summarize the quality risk documents you’ve prepared,
or simply reference them in the test plan.

**Proposed Schedule of Milestones** \
We can extract these from previous material that we've prepared.

**Transitions** \
For each test phase, the system under test must satisfy a minimal set of qualifications before the test organization can
run tests effectively and efficiently, i.e it makes no sense to start extensive user-scenario testing of something if
basic functionality isn't working. This section should specify the criteria essential for beginning and completing various
test phases (and for continuing an effective and efficient test process). Usually referred as *entry*, *continuation*,
and *exit* criteria, respectively. Also *entry, suspension/resumption, and exit* criteria. \
When you adding those criteria, be aware of what you’re actually saying: ‘‘If someone outside the test group fails to 
comply with these rules, I’m going to object start of the next phase of testing, ask to stop with testing until needed
criteria are achieved, or suggest that we not move this project forward.’’ So add really important things here, and 
criteria that has solid business-related underground to prove to stakeholders that this is important. \
Criteria could be amount of opened bugs by severity, but also affect on budget, schedule and features. \ 
During the testing we can divide level of achievement to green, yellow, red. 

*Entry Criteria* (DoR for a test phase) \
Entry criteria spell out what must happen to allow a system to move into a particular test phase:
- Are the necessary documentation, design, and requirements information available that will allow testers to operate
  the system and judge correct behavior?
- Is the system ready for delivery, in whatever form is appropriate for the test phase in question?
- Are the supporting utilities, accessories, and prerequisites available in forms that testers can use?
- Is the system at the appropriate level of quality? Some or all of a previous test phase has been successfully completed?
  Smoke tests passed?
- Is the test environment — lab, hardware, software, and system administration support — ready?

![entry](/managing_testing_process/media/entry_criteria.PNG)

*Continuation Criteria* \
Defines those conditions and situations that must prevail in the testing process to allow testing to continue effectively
and efficiently. Stable test env, the bug backlog manageable, and the tests for the most part unblocked, installable
and stable test releases must be delivered regularly and properly; and the change to the system under test must be known
and controlled.

![continuation](/managing_testing_process/media/continuation.PNG)

*Exit Criteria* \
Explains how to determine when the project has completed testing. i.e. one exit criterion might be that all the planned
test cases and the regression tests have been run, or project is functional. In the case of System Test exit criteria —
provided System Test is the last test phase on your project — these exit criteria often become the criteria by which the customer-ship or deployment decision is made.

![exit](/managing_testing_process/media/exit.PNG)

**Test Development** \
Test projects include work related to design and develop various *test objects*, such as *test cases*, *test tools*, *test procedures*, *test suites*, *automated test scripts*, etc. Collectively, we car refer to these as **test systems**.
In the section we describe how my test team will create each of those objects. Write detailed test cases, getting test data
and why we picked those approaches. Automation - test tools, and why we’re using them, developing of the framework, custom
solutions creation.

**Test Configurations and Environments** \
This section about which hardware, software, networks, and lab space I will use to perform the testing.
For these various test systems, I’ll describe whatever important configuration details bear mentioning, as well.
PCs, test networks, other accessories. Platforms, browsers, servers, clouds, CIs, etc.

**Test Execution** \
Highlights important factors that affect the test execution, e.g. to run tests, you need to receive some resources and
systems to test, gather data to track and analyze, and report to your team and managers.
Level of detailing this section depends on seniority of the qa team, with juniors, the more we nail down the test
execution during the planning phase, the less confusion we anticipate.

Resources \
In this section I identify the key participants and their role, contacts.

![exit](/managing_testing_process/media/resouces.PNG)

Also we can add an *escalation process* that defines what happens if some key participants do not or cannot fulfill
their agreed-upon role. Discussing this with managers, and aware the backup guys.

Test Case and Bug Tracking \
Describes the systems used to manage and track test cases and bugs. Process the team uses to manage the bugs, and other
communication channels to other teams such as development, management.

Bug Isolation and Classification \
How we isolate bugs and to classify bug reports. Isolating - experiment with the system to find connected variables,
causal or otherwise. It’s important to be explicit about bug isolation. Otherwise, testers end up helping with debugging,
can be occupied for a long time with very little to show for it in terms of test coverage. \
Classifying a bug report puts it to a particular category that indicates how the bug should be communicated and handled.
- Requirements failure.
- Nonrequirements failure. (significantly affects the quality of the system in unacceptable ways)
- Exception requested. A failure, but the programmers believe that it will not significantly affect the customers’ experiences
- External failure. Issue from a factor or factors external to or beyond the control of the system under test.
- Test failure. The programmers believe that the test has returned a spurious or invalid error.

Rather than classifying bugs, there is a bug triage process to assign bug priority and determine which bugs the project
team must fix prior to release. In that case, you might want to describe that process here.

Test Release Management \
One of the major interfaces between the overall project and testing occurs when new revisions, builds, and components
are submitted to the test team for testing. In the absence of a predefined plan for this - absolute chaos.
So here is a place to define the key elements of the test release process that can affect my effort.
In the ideal case, we try to create a test release process like this:
![release_cycles](/managing_testing_process/media/release_cycles.PNG)

Predictable timing is important, once a week, has worked well on most projects.
Once-a-week test releases give me time to complete some scheduled tests and do some exploratory testing as part of each
test cycle, rather than just doing confirmation testing of the bug fixes in that test release.
More frequently often leaves test teams very little time for anything but confirmation testing the fixes.
Less frequently can introduce major regressions and other changes.

Every new release of a software or hardware component into the test lab should have a release (or revision) number or
identifier attached. This identifier is essential so that testers can determine which version of the system contains
a bug, which version fixes that bug, which pieces are compatible with other pieces, and which versions you have tested.

You should also get release notes with the release. These release notes should specify which bugs were fixed, what
changes were made, how the changes will affect system behavior, and so forth. This is especially true for complex 
systems that interface with other systems, since your schemes and API has changed - in this way you can at least
warn them. Also unified docs and end release product format is helpful.

Test Cycles \
Test cycle - running one, some, or all of the test suites planned for a given test phase. A single test release of the
system under test. Generally, new test releases occur during a test phase, triggering another test cycle. This section
For example, if test suites 3.1 through 3.5 are planned for a three-cycle system test phase, the first cycle could have
3.1 and 3.2; the second cycle - 3.3, 3.4, 3.5; and the third cycle, all from 3.1 - 3.5. Any given test phase involves
at least one test cycle through the test suites planned for that phase. Each subsequent cycle generally involves a new
release of increment. In the section you should spell out your specific assumptions and estimates about the number,
timing, and arrangement of test cycles.

Test Hours \
If I need to define the specific hours of testing. Multiple shifts to speed up the process, 16 or 24 hours a day.
Or your team is flexible-hours policy.

**Risks and Contingencies** \
Identify the key project risks that could affect testing and to determine how you’ll deal with those risks.
For any risk, you have four options:
- Mitigation. Taking steps in advance that reduce the likelihood or impact of the event or outcome.
- Contingency. Being ready to act, should the risk become an actual event or outcome, to reduce its impact.
- Transfer. Get stakeholder to accept the impact of the risk should it become an actual event or outcome.
- Accept or ignore: Doing nothing (better work if the risk is low).

Possible risks:
- Logistics or product quality problems. Solution - careful test and project planning, test design.
- Uninstallable test deliverables - well done CI and night builds with smoke test or sanity test.
- Excessive change in the requirements, design, implementation - robust test design and lightweight test documentation,
  change control processes, defined escalation processes.
- Insufficient test environments - robust dev env, escalation process, devops on site.
- Gaps in test coverage - reactive testing (bug hunts, software attacks, and exploratory testing), continuous test
  improvements
- Problems in test start dates and releases - drop less priority tests, escalation to management with a request for more
  test time or elimination of untested features.

**Change History** \
This part of the document records the changes and revisions that have been made to the test plan itself to this point. 

**Referenced Documents** \
As a rule, a test plan refers to other documents such as design specifications, requirements, the test suites, any
quality risk analysis documents, and other pertinent information.

**Frequently Asked Questions** \
Many of these questions entail describing the importance of the escalation process or some other delicate matter.

The IEEE 829 Template \
The plan above is a bit different, but maybe we need to implement standard somewhere.

![IEEE_829](/managing_testing_process/media/IEEE_829.PNG)

### Selling the Plan
