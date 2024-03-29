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
Ideal Testers: Programmers, BB/Net/System Admins, Electrical/Mechanical Engineers \
Test Granularity: Structural (White-Box) => Ideal Testers: Test Engineers, Test Technicians, (Some) Programmers \
Test Granularity: Behavioral (Black-Box) => Ideal Testers: Tech Support/Help Desk, Sales/Marketing, Business Analysts/Users \
Test Granularity: Live, (Alpha, Beta, or Acceptance)

_Structural (White-Box) Tests_ - find bugs in low-level structural elements such as lines of code, database schemas,
chips, subassemblies, and interfaces. The tester bases structural tests on **how a system operates**, involves a detailed
technical knowledge of the system. \
_Behavioral (Black-Box) Tests_ - find bugs in high-level operations, such as major features, operational profiles, and
customer scenarios, **what a system should do**. Behavioral testing involves a detailed understanding of the application
domain, the business problem that the system solves, and the mission the system serves. \
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

## What we should test?
After we understood what areas to test, next we figure out what should we test in those areas. For that we need to 
understand what is quality fot the project. \
Testing should cover the main features, those that determine customer and user satisfaction, and try to find as many
as possible of the bugs that would result in dissatisfaction. \
Developers are exposed to various risks related to not implementing all the satisfying features and to implementing
some of them improperly. These risks can collectively be called **quality risks**. The process of testing should allow
the test organization to assess the quality risks and to understand the failures that exist in the system under test.
Testing looks for situations in which a product fails to meet customers’ or users’ reasonable expectations in specific
areas, terms like functionality, usability, reliability, performance, and serviceability matters.
Besides that testers should cover **Customer usage scenarios**.

>Nice thought: As people use a product — a car, an espresso machine, a bar of soap — they form opinions about how well 
that product fulfills their expectations. These impressions, good or bad, become their **experience of quality** for
that product. Test teams try to assess, in advance, customers’ experiences of quality.

### How to analyze quality risks?
A bit about risk-based testing. **Risk** generally means the possibility of a negative or undesirable outcome or event.
When the primary effect of a potential problem is to impact project success, we can call it a _project risk_, e.g.
a possible test environment problem that could delay completion of a project is a project risk. \
When the primary effect of a potential problem is on the quality of the product itself, we can call it a _quality risk_.
e.g. a possible performance defect that could cause a system to respond slowly during normal operation is a quality risk.

Risks differ in terms of importance, which I refer to as the _level of risk_. Basically it considers two factors:
- The likelihood of the problem occurring
- The impact of the problem should it occur

To determine likelihood, you generally focus on technical considerations, such as the programming language, network 
throughput, and so forth. To determine impact, you generally focus on business considerations, such as the potential
financial impact of a problem, the frequency with which users or customers will encounter a problem, and so forth. 

Risk-based testing strategies start with quality risk analysis to identify risk items and determine the level of risk
for each risk item. You then address the quality risks in four ways:
- Allocation of effort. During planning, preparation, and execution of testing, you allocate effort for each quality
risk item based on the level of risk;
- Test sequencing. During planning, preparation, and execution of testing, test managers and testers attack the risks
in risk priority order, starting with the most important quality risks first and working their way down to the less
important ones;
- Test triage. If needed during test execution, should management reduce the time or resources available for testing,
you can delete tests from the test plan in reverse-risk priority order, starting with the least important tests;
- Reporting test results. Test managers should report test results in terms of risk;

### Properties and Benefits of Analytical Risk-Based Testing
Analytical risk-based testing has six properties, but two are most important:
- The testing effort is proportional to the level of risk; The higher the level of risk, the more test effort you expend
  to develop and to execute test cases for that risk item.
- Test tasks are sequenced based on risk. The higher the level of risk for any risk item, the earlier you develop the 
  test cases for that risk item.
- overall level of residual quality risk goes down as test execution continues;
- risk-based test results reporting, means that you report your test results not only in terms of bugs (found and fixed)
  and test cases (run, passed, and failed), but also in terms of the overall level of residual quality risk.
- intelligent test triage
- self-correction of errors in the risk analysis. Early analysis will often be based on incorrect assumptions, so you can
  update risks constantly.

### Quality Risk Analysis with Checklists
During **unit** and component testing, the following major quality risk categories apply:
- State. Component(s) implement what is called a *state machine*. Incoming events cause a state machine to transition
through clearly defined states. State machines present a variety of quality risks related both to the state machine as
a whole and to the individual states. State transitions conditions, correct outputs from state transition, handling legal
and illegal event/condition combinations.
- Transactions. Components that have transactions with the user or with other components present various risks.
For example, creating a new file is a transaction in SpeedyWriter. Can the user select the appropriate file
template? How does the product respond to illegal file names?
- Code coverage. Some of the features has hard to reproduce states, you should put effort to test them.
- Data-flow coverage. Transfer of information parameters, shared (global) data space, or DB — from one component to another.
- Functionality. Functional quality risks are generally of two types: function behaves improperly, or properly but has undesirable side effects.
- User interface. Understandable prompts and messages, clear control flows, and appropriate color schemes and graphics.
- Mechanical life. Any object that can be flexed or moved has a limit to the number of motions it can endure: keyboard keys break, buttons snap off, latches crack, and contacts fail.
- Signal quality. Any circuit that processes data, whether digital or analog, is subject to the constraints imposed by signal quality. Lead times, lag times, rise times, fall times, noise, spikes, transients, and the like can be out of spec, causing a component to fail.

During **integration** testing, the following major quality risk categories apply: 
- Component or subsystem interfaces. Every API, method, function, bus represents an opportunity for misunderstandings
between the two (or more) component development engineers.
- Functionality. Wrong action, or the right action with the wrong side effect. Here you focus on functionality that
requires the correct operation of two or more components or a flow of data between them.
- Capacity and volume. The capacities (static) and volumes (dynamic) parts of computer as a Hardware and Software. Network
card handling realistic traffic levels, disk subsystem deal with realistic loads, data-storage capability sufficient?
- Error/disaster handling and recovery. Undesirable events happen. PCs lock up. Servers crash. Networks drop packets.
Hard drives die, black out, etc.
- Data quality. If your product stores, retrieves, and shares significant amounts of (delicate) data you should consider
testing whether the product can handle that data reliably. System shouldn't damage and corrupt the data if something goes
wrong.
- Performance. As with capacity and volume, performance concerns apply to most subsystems or components in a product.
Performance is not only ‘‘how many per second,’’ but also ‘‘how long.’’
- User interface. As more pieces of real functionality are integrated into the system, you can start to test these through the user interface.

During **system and acceptance** tests, the following major quality risk categories apply:
 - Functionality. Consider functionality in terms of whole sequences of end-user operations or an entire area of
functionality.
- User interface.
- States. State machines can exist at the system level as well as at the component level.
- Transactions. Transaction handling can also occur at the system level.
- Data quality.
- Operations. Complex systems often require administrators; databases, networks, and servers come to mind.
Can you back up and restore files? Can you migrate the system from a Windows server to a Linux server?
Can you add an external RAID array? Can you add memory? Can you add a second LAN card?
- Capacity and volume.
- Reliability, availability, and stability.
- Error/disaster handling and recovery. Focus on the external failures.
- Stress. This risk category is often an amalgam of capacity, volume, reliability, stability, and error/disaster handling and recovery.
- Performance.
- Date and time handling. Different/Multiple time zones, or even multiple time zones if it is a distributed system.
- Localization. Different languages, special letters. Different volts (220/110, 50/60 hertz). There are cultural issues
and taboos.
- Networked and distributed environments. Time zones, telephone standards, etc.
- Configuration options and compatibility. Drivers, libraries, and software, will Product talk to all the printers, network drivers, coexisting with other applications.
- Standards compliance. In the hardware world, you might need to consider legal and market standards such as UL, FCC, CE, and others that might be required for your target market.
- Security.
- Environment.
- Power input, consumption, and output.
- Shock, vibration, and drop.
- Installation, cut-over, setup, and initial configuration.
- Documentation and packaging. 
- Maintainability. Versioning, online upgrades, etc.
- Alpha, beta, and other live tests.

ISO 9126 Standard says:
Functionality, Reliability, Usability, Efficiency, Maintainability, Portability.

### **Identify and Assess** quality risks

#### Steps:
1. *Select a technique and template*. Technic may vary depends on the level of formality involved and in the amount of documentation. But it's always a good to start with simple one, just to begin.
2. *Assemble a cross-functional team to perform the quality risk analysis.* You need technical stakeholders and business stakeholders. Technical stakeholders understand what is likely to go wrong with the system. Business stakeholders 
understands the impact of potential problems in the system. This is important step, risk-based testing uses quality risk
analysis to decide what to test, in what order, and how much, that means something will be definitely avoided from being
tested. The team should include the project manager and the development managers to keep them on track and clarify things.
3. *Perform the quality risk analysis.* two general approaches to this. Hold a brainstorming session with the entire team,
use the earlier checklists and facilitate the identification and furthermore assessing quality risk items, it's a time consuming session. The other one is to hold a sequence of one-on-one or small-group interviews with distinct stakeholder groups.
Afterwards with a smaller focus group of stakeholders you review the list and assess the level of risk for each risk item.
Capture the results in the template (spreadsheet).
4. *Verify the distribution of the risk-level ratings* to ensure adequate dispersal, and adjust the ratings if necessary.
One of the challenges of quality risk analysis, is set the initial risk-level assessments that screws differentiating
the levels further risks. Therefore, you should plan to check the distribution of the risk-level ratings.
5. *Traceability between specs, docs, requirements and risks.* This process might result in the discovery of additional
risk items that you haven't considered before.
6. *Traceability between test cases and risks.* Besides new risks, you can find significant areas of under-testing and over-testing, relative to the level of risk associated with various quality risk items.
7. *Commit the documents* into whatever repository you use for test system documents. You’ll adjust it later at major
project milestones, but for the time being you have a solid foundation for your test estimate. E-mail the it at least 
to participants in the quality risk analysis.

#### Quality risk analysis Techniques and Templates
The two most common are the *informal technique* and *failure mode and effect analysis* (FMEA).

***Informal quality risk analysis:*** \
It's a table with basic columns: **#, Functionality under risk, Likelihood, Impact, Priority, Testing, Tracing**
1. Likelihood. How likely does the team feel it is that one or more bugs will exist for this item? 1 - 5 scale. 
   - Very high. Such bugs are almost certain to occur.
   - High. Such bugs are more likely to occur than not to occur.
   - Medium. Such bugs have about an even chance of occurring as not occurring.
   - Low. Such bugs are less likely to occur than not to occur.
   - Very low. Such bugs are almost certain not to occur.
2. Impact. How bad would it impact the business if we delivered one or more bugs for this item to the customers?
   - Very high. Such bugs would render the system unsalable.
   - High. Such bugs would seriously impair users and significantly reduce sales.
   - Medium. Such bugs would inconvenience some users and marginally reduce sales.
   - Low. Such bugs would inconvenience a few users and might reduce sales.
   - Very low. Such bugs would only rarely affect users and would not reduce sales.
3. Priority Number aggregate level of risk. You can calculates the number by multiplying *likelihood* and *impact*. Or
customize it somehow. You run the tests correspondent to this number, test case inherits the risk from this table, 
starting with the tests with high risk, if you need reduce number of tests due to pressure, you remove ones with lower
risk.
4. Testing. Based on the risk priority number, what relative amount of test effort should we put into developing and
executing tests against this risk item.
   - Extensive. Run a large number of tests that exercise many combinations and variations of interesting conditions.
   - Broad. Run a medium number of tests that exercise many different interesting conditions for the risk item.
   - Cursory. Run a small number of tests that sample the most interesting conditions for the risk item.
   - Opportunity. Leverage other tests to explore the risk item with minimal effort and only if the opportunity is there.
   - Report bugs. Only report bugs observed for this risk item if discovered during other tests.
1. Tracing. Any tracing columns with requirements or existing TCs.

***failure mode and effect analysis (FMEA):*** \
Fundamentally, FMEA is for understanding and prioritizing possible failure modes in system functions, features, 
attributes, behaviors, components, and interfaces. Also provides a means of preventive defect reduction and tracking
process improvements.
![FMEA sheet](/managing_testing_process/media/FMEA.PNG)

**Details:**
- **System Function or Feature** You enter a concise (short) description of a system function.
- **Potential Failure Mode(s)-Quality Risk(s)** ways of failure for each function or feature, these are
associated with the loss of a specific system function. Each specific function or feature can have multiple
failure modes.
- **Potential Effect(s) of Failure** taken affect for the user
- **Critical?** Consequences for the user. Is the feature becomes unusable if this failure mode occurs?
- **Severity** Capture the effect of the failure on the *system*:
  - 1 Loss of data, hardware damage, or a safety issue
  - 2 Loss of functionality with no workaround
  - 3 Loss of functionality with a workaround
  - 4 Partial loss of functionality
  - 5 Cosmetic or trivial
- **Potential Cause(s) of Failure** possible factors that might trigger the failure
- **Priority** Capture the effect of the failure on the *user*:
  - 1 Complete loss of system value
  - 2 Unacceptable loss of system value
  - 3 Possibly acceptable reduction in system value
  - 4 Acceptable reduction in system value
  - 5 Negligible reduction in system value
  You should rely on input from sales, marketing, technical support, and business analysts.
- **Detection Method(s)** Currently existing method or procedure, that can find the problem before it affects users,
excluding any future actions (such as creating and executing test suites) you might perform to catch it. (If you do not
exclude the tests you might create, the next column will be skewed.)
- **Likelihood** a number that represents the vulnerability of the system, in terms of:
  - a) existence in the product (e.g., based on technical risk factors such as complexity and defect history);
  - b) escape from the current development process;
  - c) effect on user actions. This example uses the following 1-to-5 scale:
    - 1 Certain to affect all users
    - 2 Likely to impact some users
    - 3 Possible impact on some users
    - 4 Limited impact to few users
    - 5 Unimaginable in actual usage
  This number requires both technical judgment and an understanding of the user community, which makes participation by
  programmers and other engineers along with business analysts, technical support, marketing and sales important.
- **Risk Priority Number (RPN)** is the product of the *severity*, the *priority*, and the *likelihood*.
- **Recommended Action** one or more simple action items for each potential effect to reduce the related risk.
- **Who/When?** who is responsible for each recommended action and when they are responsible for it (e.g. which test phase).
- **References** for more information about the quality risk. Involves product specifications, a requirements document, etc.
- **Action Results** record the influence of the actions taken on the priority, severity, likelihood, and RPN values.
  You will use these columns after you have implemented your tests, not during the initial FMEA.

A few pitfalls in using the FMEA method. It's a risk that you can become distracted by quality risks 
that lie outside the scope of the test project, e.g. operating-system bugs or underlying hardware failures, possible
low-level failures in drives or chips. You need to keep it dry, if development team or some other group cannot fix or 
at least address potential bugs - it’s **out of scope**. The resulting FMEA document will be large. Be sure that you
are ready to maintain this document after you create it. Otherwise, you won’t be able to use it to focus test
development and execution, which defeats the purpose.

**Tips and Challenges of quality risk Analysis**
- Keep the proper degree of details. If you think that risk should be separated - do it only if you see that there might
be separation between different levels of risk. Too much details - hard to manage, too little - hard to prioritize properly.
- Results of the quality risk is not ultimate truth, it's a collective opinion of the risk group, don't forget.
- If you can’t reach consensus on risk, escalate to some decision-maker, responsible for the quality of the delivery.
- If priority inflation is happening, ask about extra time, budget, ot not releasing the feature at all.
- Any risk should be explained, why it's so high or low.


## What You Can Test: Schedule, Resources, and Budget
We have a prioritized outline of quality risks. This is analogous to the requirements for the overall project. The list
of critical quality risks documents the essential requirements for my test effort. So I need to figure out a test
schedule and a budget that will allow me to test the scariest risks.

> ‘‘Schedule, cost, and quality — pick two.’’

![time-cost-quality](/managing_testing_process/media/time_cost_quality.PNG)

These refinements balance features, schedule, cost, and quality. Once implementation begins, the feature set becomes more
rigid, the schedule more painful to change, and budget increases less likely. The two lines that show the schedule and
the cost determine the third line, quality, that completes the triangle.

### Fitting a Test Schedule into the Project
At the beginning you have a ship date and a list of product features. You can use a work-breakdown structure, which is
a top-down approach, start with big categories of work and iteratively decompose them into discrete tasks, especially 
at the early stages when I don’t have a lot of details. \
The standard test process lifecycle is:
1. Test planning. (testing scope, approach, researching, scheduling)
2. Test analysis and design. (risks, requirements, features to test, test design)
3. Test implementation and Execution (develop and priorities, creating test suites,  execution, re-testing, regression)
4. Evaluating exit criteria (reporting, and analysis test results)
5. Test closure activities (improving, work analysis)

But since we've done part of the "Test analysis and design" and we are only in beginning of our project we'll adjust it
a bit. Breaking the test effort into major phases such as these:
 - Planning
 - Configuration (getting the necessary hardware and other resources and setting up the test lab)
 - Staffing (if applicable)
 - Test development (building/deploying the test tools, creating the test suites/cases library, reporting tools, and
  documenting the test process)
 - Test execution (running the tests, recording test status, and reporting results)

Next, we divide each phase into activities: Within the "Planning" category, for example, we set up activities such as
defining quality risks, creating the schedule and the budget, writing test plans, and selecting test tools. \
After that, we decompose each activity into tasks, and then subtasks if necessary. This decomposition continues until
I have constituent tasks that are one or two days long and are the responsibility of one person.
Small task definitions allow to know  weather we're on track during the project. Big tasks can get dangerously out of
control, and I won’t discover such problems until a long period (a week or more). \
Configuration phase depend on the test environment we need, list of quality risks usually can given me some ideas here. \
Development, we can separate major tasks for each test phase, and create a separate suites for each test phase. Test
suite development should proceed in priority order. Don't forget the documentation about how the test system works, both
in terms of the design and functionality of the testware and the way the test process uses that testware to find bugs. \
Execution, two main things: how long will it take to run all the tests once? and how many times do we need to run the
tests against the release to find and subsequently confirm bug fixes?

Estimation of execution on paper should be based on experience how the team work during last few months at least.
But if it's a new project and new team, you still can do some math. Let's say test phase of the feature release takes 
approximate 2 person-weeks and you have 2 allocated testers to do it. So we can say that 2 persons can test a developed
feature in one week. Then based on previous experience let's assume that you need three times to run the tests before 
release the feature. To find bugs, retest fixed bugs and find more, and retest the latest fixes. So we'll get 2 testers,
busy for 3 weeks to release a feature.

![release_cycles](/managing_testing_process/media/release_cycles.PNG)

The **time required to run the tests** is something a test manager can control and measure with solid estimates of time 
and effort. On another hand, **the number of cycles** is dependent on many factors outside a test manager control. Quality 
of the software, the programmers are slow to fix, bug fixes tend to break other areas of the product, etc. those factors
increases number of test cycles. So you cannot measure it properly if it's a new team. \
Better assign the entire team to test tasks at the test cycle level of detailing. Single tester assignment to a single
test case doesn’t work well because we don’t know all the tests we're going to run during this early planning stage,
so if we account only for the tests we know, we’ll underestimate. Usual rule of thumb is to estimate the test effort,
increase it by 50 percent for the tests I don’t know about yet, plan on between 20 and 30 hours of testing per tester
per week. Capture the basic dependencies, e.g. develop a test suite before we can run it, develop feature before start A
test cycle, but also allocate some extra time into my schedule for the discoveries. It's easier to fight for extra time
upfront, and not after commitment.

When you create the tasks also assign resources, even if I can’t be complete at this point. \
Accurate scheduling requires the participation of the actual contributors wherever possible. \
Test estimation is hard to do perfectly, but not terribly hard to do well. If you follow good project management 
practices in preparing your work-breakdown structure, don’t forget key tasks, estimate conservatively, don’t overload
people and resources, involve your entire team in estimation, and focus on key dependencies and deliverables, you
can construct a draft schedule for your test project that should prove relatively accurate. Also make sure that 
milestone dates fit within the constraints of the project. As the project proceeds, you track progress against the
schedule, adding details, adjusting durations, resolving resource conflicts, including more dependencies, and so on.
Keep it simple to start. Simple schedules are less detailed and accurate but gives overall picture and schedule. If you
try to create complicated 300-task schedules, you can get lost in the minutiae.

![project_schedule_1](/managing_testing_process/media/project_schedule_1.PNG)
![project_schedule_2](/managing_testing_process/media/project_schedule_2.PNG)

### Estimating Resources and Creating a Budget

Given a work-breakdown structure with detailed resource allocations, we can create a budget, again using a top-down
approach. Create a list of resources, starting with general categories such as these:
- Staff. This category includes permanent employees, contractors, and consultants.
- Test tools. Code-coverage analyzers, scripting utilities, GUI test automation systems, low-level diagnostic programs,
  and so forth. Hardware testing can involve oscilloscopes, shock and vibration tables, thermal chambers, and other equipment.
- Facilities and overhead. Can include travel allowances, lab space, workstations, and infrastructure such as cabling,
  routers, hubs, bridges, ISDN terminals, and so forth. 
- Test environment. This category includes the hardware, software, engineering samples, and experimental prototypes.
- External labs.If intended to use external labs for environmental testing, localization, performance, or other purposes.

Within each category, I list the individual items I will need. If you find it difficult to estimate costs for tools,
facilities, infrastructure, or the test environment, you can hit the Web or make some telephone calls.

At this point, you can compare each line item against your schedule. When do you start using the resource? How long do
you use it? Are ramp-up and ramp-down times associated with the resource?

After coming up with the budget, I usually sleep on it and then review it the next day. If the budget contains a few
gaping holes where I don’t have enough information to even hazard a guess, I’ll be honest and indicate that.

![budget](/managing_testing_process/media/budget.PNG)

With a quality risks list, schedule, and budget, I have a concise package that I can take to management.
By speaking management’s language, I can address four key questions that will arise:
- What type of risk management are we buying?
- How long will it take?
- What will it cost?
- What’s the return on investment?

Be flexible. If management insists on reduced costs or a faster schedule (or both), I eliminate tests in reverse priority
order. If co st is the major concern but I can add a few weeks to the schedule, perhaps I can get by with one less employee. Outsourcing can also reduce costs. I make the case for what I believe needs to be done, but I’m prepared to do less.
The only taboo is agreeing to do everything I initially proposed to do but in less time and/or for less money, unless
management wants to cut out the contingency time and money and run a high risk that later discoveries will break my
budget or schedule. At the end of this negotiation, I have an approved budget and schedule and a mutual understanding of
the scope and deliverables for my test project.