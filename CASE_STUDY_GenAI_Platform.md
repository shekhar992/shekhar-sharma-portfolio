# Case Study: Transforming Pharmaceutical Research with GenAI

**Role:** Senior Product Manager  
**Company:** Deloitte (Pharmaceutical Client)  
**Duration:** 2023 - 2025 (18 months)  
**Team:** 18 people (10 Engineers, 2 Data Scientists, 1 Designer, 2 Medical SMEs, 2 QA)

---

## Executive Summary

I inherited a broken GenAI platform serving 5 medical researchers and transformed it into a mission-critical research tool supporting 200+ users across 5 departments. By redesigning the user journey, implementing an agentic query strategy, and building role-based access controls, we:

- **Reduced query-to-insight time from 12 hours to 6 hours** (manual research → AI-powered search)
- **Scaled 40x users** (5 → 200 researchers across 5 departments)
- **Grew platform capability 5x** (2K → 10K documents + 5 live connectors)
- **Achieved 95% on-time delivery rate** across 4 quarterly releases
- **Secured $200K incremental funding** through rapid prototyping (collaboration forum)
- **Improved platform retention from 60% to 85%**

This case study explores the strategic decisions, technical trade-offs, and leadership challenges of building an AI platform where accuracy and trust mattered more than speed—and what I learned when the project ultimately shut down due to organizational changes.

---

## 1. Context: The Problem Space

### The Research Bottleneck

Medical researchers at a major pharmaceutical company were drowning in documentation. To conduct literature reviews or validate hypotheses against existing clinical protocols, researchers faced a manual, time-intensive process:

**Before the platform:**
- Researchers manually searched through thousands of PDF documents
- Primary tool: Ctrl+F across multiple files
- Average time per research query: **12+ hours**
- No centralized knowledge repository
- Information quickly became outdated as new conferences and research papers published

**The human cost:**
The real problem wasn't just time—it was cognitive load. Researchers would forget which document contained specific information, leading to repeated searches. With drug development timelines already stretched across years, every day spent searching was a day not spent making scientific breakthroughs.

### When I Joined: A Broken Foundation

I inherited a platform that technically worked but was practically unusable:

**Initial State (March 2023):**
- 5 active users (out of 500+ potential researchers)
- ~2,000 documents indexed
- "Old, unstitched UI" with confusing navigation
- No clear user journey from point A to point B
- Response times: ~2 minutes per query
- Zero department-specific access controls

**The Core Challenge:**
The platform had good AI underneath—a fine-tuned LLM trained on pharmaceutical literature—but the experience was so clunky that researchers preferred their old manual methods. My mission was to transform this prototype into a production-grade research platform.

---

## 2. Discovery: Understanding Trust Over Speed

### Early User Research Insights

While the initial user interviews were conducted before I joined, I immediately embedded myself with power users through Q&A sessions and observation. Three critical insights emerged:

**Insight #1: Authenticity > Speed**
> "I don't care if it takes 5 minutes. I care if it's RIGHT."  
> — Senior Medical Researcher

Researchers were PhD holders and doctors. They didn't trust AI outputs initially. Their biggest concern wasn't wait time—it was **citation accuracy**. They needed to verify every AI-generated insight against source documents.

**Insight #2: Data Freshness Anxiety**
Research moves fast. New clinical trials, conference papers, and regulatory updates publish constantly. Researchers complained that by the time they found information manually, it was already outdated. They needed **live connectors** to external databases, not just static document repositories.

**Insight #3: Persona Misunderstanding**
My biggest early mistake: I assumed these scientists would appreciate a beautiful, modern UI. Wrong. These were 40+ year old researchers who valued **function over form**. They wanted to "get work done," not admire interfaces.

**Learning:** I spent 3 sprints over-designing UI elements that users didn't care about. Once I pivoted to clarity and speed-to-task, adoption improved immediately.

---

## 3. Strategic Decisions: The Hard Trade-offs

### Decision #1: Agentic Strategy vs. Brute Force Search

**The Problem:**
As we scaled from 2K to 10K documents + added 5 live connectors, response times ballooned:
- 2 minutes (2K docs, internal only)
- **6 minutes** (10K docs + live connectors)
- User frustration escalating

**Options Considered:**
1. **Throw hardware at it** – Upgrade infrastructure (expensive, diminishing returns)
2. **Limit data sources** – Cap documents or remove connectors (defeats purpose)
3. **Agentic decomposition** – Break queries into targeted sub-queries (technically complex)

**My Research:**
I studied mature GenAI products (ChatGPT, Claude) and noticed they didn't brute-force search everything. They decomposed complex queries into focused retrieval tasks. I pitched this approach to our tech lead:

> "ChatGPT feels instant because it's smart about WHERE to look, not because it searches EVERYTHING."

**The Bet:**
Build an agentic system that:
1. Decomposes user queries into specific research questions
2. Determines relevance: internal documents vs. live connectors
3. Optimizes system prompts based on data source patterns
4. Fetches and synthesizes results intelligently

**Result:**
- Response time reduced to **~3 minutes** (acceptable for complex queries)
- Set user expectations: "Accuracy takes time" became our positioning
- Users accepted the 3-minute wait because response quality was exceptional

**What We Said NO To:**
- Building our own LLM (too costly, reinventing wheel)
- Compromising on accuracy for speed (trust would evaporate)
- Caching generic responses (pharmaceutical data is too specific)

---

### Decision #2: Role-Based Access Control (RBAC)

**The Business Need:**
Different departments needed different features:
- Department A: Only internal document search
- Department B: Live connectors + collaboration tools
- Department C: Full platform access + administrative controls

**The Simple Solution:**
Tie platform access to Active Directory (AD) permissions. If your AD grants Department A access, you see Department A features. No manual permission management needed.

**Why This Mattered:**
- Simplified onboarding (no custom role setup)
- Security compliance (leveraged existing AD infrastructure)
- Faster feature rollout (didn't need to configure per-user access)

**Result:** Scaled from 1 department to 5 departments without security bottlenecks.

---

### Decision #3: Collaboration Forum (The $200K Funding)

**The Insight:**
Researchers were sharing ideas OUTSIDE the app—via email, Slack, internal wikis. They wanted to discuss research findings within the context of the platform.

**The Prototype:**
I spent **2 days** building a Reddit-style collaboration forum on Bolt.new:
- Users could post research questions publicly
- Tag topics and invite colleagues
- Threaded discussions with citation references

**The Pitch:**
I showed the rapid prototype (built with AI assistance) to the Product Owner (PO) and client. They immediately saw the value: keeping research discussions centralized meant better knowledge retention and faster collaboration.

**The Win:**
Secured **$200K incremental funding** to build the forum natively into the platform.

**Learning:** Rapid prototyping with AI-assisted development is a PM superpower. A 2-day prototype can unlock 6-figure budgets if it solves a real pain point.

---

## 4. Execution: Leading Without Authority

### Building Team Alignment

**The Challenge:**
I managed an 18-person team without direct reports:
- 10 Engineers (Frontend, Backend)
- 2 Data Scientists (LLM optimization, vector search)
- 1 Designer (UI/UX redesign)
- 2 Medical SMEs (domain validation)
- 2 QA Engineers (testing, compliance)

Engineers initially operated in silos, focused on tasks rather than outcomes. Getting everyone aligned on a shared vision took work.

**My Approach:**
1. **Radical transparency:** Every PI Planning session, I opened with "What are we building and WHY?"
2. **No Dumb Questions policy:** Engineers felt safe asking clarifying questions without judgment
3. **Show, don't tell:** I demonstrated how features connected to user pain (brought researcher quotes to standups)

**Result:**
After 2 sprints of alignment work, the team started operating like clockwork:
- **95% on-time delivery rate** across 10+ major features
- Fewer post-development questions (clearer requirements upfront)
- Engineers started proactively suggesting UX improvements

**Key Lesson:** Teams deliver faster when they understand the "why" behind their work.

---

### PI Planning Success Formula

**My Process:**
1. **Pre-Planning:** Share user stories + context docs 48 hours ahead
2. **Kick-off:** Present "What we're solving for" with real user quotes
3. **Open Forum:** Engineers ask questions, challenge assumptions
4. **Capacity Planning:** Team self-assigns based on realistic estimates (no manager pressure)
5. **Acceptance Criteria:** Designer + SMEs define "done" together

**Why It Worked:**
- Engineers had psychological safety to raise concerns early
- Fewer surprises mid-sprint (problems surfaced upfront)
- Team bought into commitments (self-assigned vs. top-down)

---

## 5. Execution: Redesigning the User Journey

### The Before State

**Old UI Problems:**
- Generic tiles with unclear purposes ("What does this button do?")
- No breadcrumbs or navigation cues
- Users got lost moving between features
- Required extensive pre-training to use effectively

### The Redesign

**Working with the Designer:**
1. **Persona-Based Journeys:** Mapped distinct workflows for 3 researcher types
2. **Educational Messaging:** Added contextual tooltips and empty states
3. **Clear Wayfinding:** Implemented breadcrumbs, progress indicators, logical feature grouping
4. **Citation Prominence:** Made citations the PRIMARY interaction (users loved this most)

**Design Principle:**
> "Don't make me think. Get me to my answer in 3 clicks or less."

**Result:**
Users praised the improved navigation:
> "I don't need training anymore. The app guides me where I need to go."

---

## 6. Results: Impact and Metrics

### Quantified Outcomes

**User Growth:**
- **5 → 200 active users** (40x growth in 18 months)
- Expanded from **1 → 5 departments**
- **60% → 85% retention rate** (users stayed longer, returned more frequently)

**Platform Capability:**
- **2K → 10K documents** indexed and searchable
- **5 live connectors** to external pharmaceutical databases
- **~3 minute average response time** for complex queries (down from 6 minutes)

**Query Performance:**
- **12 hours → 6 hours** end-to-end research time (manual → AI-assisted)
- Measured via decomposition agent efficiency + user task completion logs
- Optimized system prompts based on query patterns reduced unnecessary data fetches

**Team Performance:**
- **95% on-time delivery rate** across 4 quarterly releases
- **10+ major features** shipped (RBAC, collaboration forum, live connectors, UI redesign)

**Business Impact:**
- **$200K incremental funding** secured (collaboration forum prototype)
- **$1.2M contract expansion** enabled by platform success
- **Platform became mission-critical** for 5 departments

---

## 7. What Didn't Work: Lessons from Failure

### Failure #1: Over-Engineering the UI

**The Mistake:**
I spent 3 sprints designing a beautiful, modern interface with animations, color-coded categories, and visual flourishes.

**The Reality:**
Users (40+ year old scientists) didn't care. They wanted speed-to-task, not aesthetics.

**The Learning:**
> "Understand your persona's pain points and give them what they WANT, not what you think looks good."

I learned to validate design decisions with actual user testing before investing engineering effort. Function beats form for enterprise tools, especially with older user demographics.

---

### Failure #2: Underestimating Hardware Constraints

**The Mistake:**
I initially believed we could optimize our way to ChatGPT-level response speeds through better algorithms alone.

**The Reality:**
We were constrained by on-premise infrastructure. No amount of agentic wizardry could overcome hardware limitations.

**The Learning:**
Set realistic user expectations early. I framed 3-minute response times as:
> "This ensures accuracy across 10,000 documents and live data sources—similar complex searches on ChatGPT also take time."

Users accepted the trade-off once they understood WHY we couldn't match consumer AI speed.

---

### Failure #3: Not Future-Proofing Leadership Transitions

**What Happened:**
The project was shut down in early 2025 after a leadership change.

**The Context:**
- Original PO: Collaborative, exposed me to business stakeholders, trusted my judgment
- New PO: Wanted "things delivered," minimal business interaction, didn't value discovery

**The Breakdown:**
1. New PO cut off direct business access
2. We couldn't ask probing questions to understand evolving needs
3. Built features based on assumptions rather than validated insights
4. User adoption dropped as we lost touch with actual pain points
5. Platform was eventually deprioritized and shut down

**The Painful Learning:**
> "A PM's effectiveness is only as good as the organizational support structure allows."

**What I'd Do Differently:**
- **Build stakeholder redundancy:** Cultivate relationships with multiple business leaders, not just one PO
- **Document product principles:** Create a clear product vision that survives leadership changes
- **Create user advisory board:** Direct researcher access that doesn't depend on PO approval
- **Evangelize wins publicly:** More visibility across org would have created protective momentum

This failure taught me that **organizational dynamics matter as much as product execution**. Great products can die if leadership doesn't champion them.

---

## 8. Key Takeaways

### What I'm Most Proud Of

**Technical Growth:**
Working on this project for 18 months transformed my understanding of AI product management. I can now:
- Evaluate LLM trade-offs (latency vs. accuracy vs. cost)
- Design agentic systems (decomposition, routing, synthesis)
- Optimize vector search and retrieval strategies
- Balance user experience with technical constraints

**Leadership Growth:**
I learned how to lead cross-functional teams without authority by creating alignment through shared understanding rather than hierarchy.

---

### What I'd Do Differently

**Balance Tech and CX:**
I initially over-indexed on customer experience (beautiful UI) without considering technical feasibility and user preferences. I'd now:
- Validate design decisions with user testing BEFORE engineering investment
- Involve engineers earlier in ideation (they spot technical constraints faster)
- Ship MVPs to learn, not polished features to impress

**Build Organizational Resilience:**
I relied too heavily on one PO relationship. I'd now:
- Cultivate direct stakeholder relationships across the org
- Create formal user advisory boards
- Document product vision and strategy publicly (internal wiki, presentations)
- Evangelize wins to build political capital

---

## 9. Visuals & Artifacts

### Recommended Diagrams (To Be Created)

**Diagram 1: Before vs. After User Journey**
- Manual research workflow (12+ hours, multiple tools)
- AI-assisted workflow (6 hours, single platform)
- Show where time savings occurred

**Diagram 2: Agentic Query Decomposition**
- User query input
- Agent breakdown (internal docs vs. live connectors)
- Parallel retrieval
- Synthesis and citation linking
- Response delivery

**Diagram 3: Platform Growth Metrics**
- Line chart: User growth (5 → 200 over 18 months)
- Bar chart: Document growth (2K → 10K)
- Line chart: Response time optimization (6 min → 3 min)

**Diagram 4: Team Structure**
- Org chart showing 18-person team composition
- Highlight cross-functional collaboration paths
- Show how PM sat in center connecting all functions

**Diagram 5: Feature Prioritization Matrix**
- What we said YES to (collaboration forum, RBAC, agentic search)
- What we said NO to (custom LLM, generic caching, compromising accuracy)
- Impact vs. Effort quadrants

---

## 10. Interview Talking Points

**30-Second Version:**
"I transformed a broken GenAI platform from 5 to 200 users by redesigning the user journey, implementing agentic query optimization, and leading an 18-person team to 95% on-time delivery. We cut research time from 12 hours to 6 hours, secured $200K additional funding through rapid prototyping, and improved retention from 60% to 85%. The project ultimately shut down due to leadership changes, which taught me the importance of building organizational resilience alongside product excellence."

**2-Minute Version:**
"At Deloitte, I inherited a pharmaceutical GenAI platform that technically worked but had only 5 users due to a clunky experience. 

My first insight: researchers were 40+ year old scientists who valued accuracy over aesthetics. I over-designed the UI initially, wasted 3 sprints, then pivoted to function-first design.

The technical challenge: as we scaled from 2K to 10K documents plus live connectors, response times ballooned to 6 minutes. I researched how ChatGPT handles complex queries, proposed an agentic decomposition strategy, and optimized to 3 minutes while maintaining accuracy.

To drive adoption, I built a collaboration forum prototype in 2 days (leveraging AI as my development partner), pitched it, and secured $200K funding. 

Leading an 18-person team without authority, I created alignment through radical transparency and a 'no dumb questions' culture, achieving 95% on-time delivery.

Results: 40x user growth (5 → 200), 5 departments scaled, 60% → 85% retention, and $1.2M contract expansion.

The project shut down after a leadership change when the new PO cut off business access. That taught me to build stakeholder redundancy and evangelize wins publicly.

I'm most proud of learning to balance technical constraints with user needs—and understanding that great products need organizational champions to survive."

---

## Appendix: Additional Context

**Technologies Used:**
- Fine-tuned LLM (proprietary pharmaceutical model)
- Vector database for document embedding
- Agentic orchestration framework
- Active Directory integration (RBAC)
- Live API connectors to external databases

**Team Composition:**
- Frontend: React-based UI
- Backend: Python/Node.js microservices
- Data Science: LLM optimization, RAG (Retrieval-Augmented Generation)
- Design: Figma for prototypes, user testing
- Medical SMEs: Domain validation, accuracy checks

**Development Methodology:**
- SAFe Agile (PI Planning every 10 weeks)
- 2-week sprints
- Continuous user feedback loops
- Bi-weekly stakeholder demos

---

**End of Case Study**

---

## How to Use This Case Study

**For Your Portfolio:**
- Feature this as a standalone page with visuals
- Link from your experience timeline
- Include pull quotes and user testimonials

**For Interviews:**
- Use the 30-second version for brief intros
- Use the 2-minute version for "Tell me about your biggest project"
- Deep dive into specific sections based on interviewer questions:
  - Trade-offs → Section 3
  - Leadership → Section 4
  - Failure → Section 7

**For LinkedIn:**
- Extract the collaboration forum story as a standalone post
- Share the agentic optimization learnings as a technical post
- Write about the shutdown as a leadership lesson

---

*This case study demonstrates strategic thinking, technical depth, cross-functional leadership, and humility through failure—everything top 10% PM candidates showcase.*
