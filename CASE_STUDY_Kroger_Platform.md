# Case Study: Building a Platform to Scale 15,000 Retail Devices

**Role:** Platform Product Manager | **Company:** Deloitte (Retail Client: Kroger) | **Timeline:** 2022 - 2023 | **Read Time:** 8 min

---

## Executive Summary

**The Challenge:** Two frontline apps were independently building duplicate backend features, slowing delivery and wasting engineering resources across 200 retail stores with 15,000 Android devices.

**The Solution:** Pitched and built a shared platform approach, consolidating common capabilities to serve both app teams while maintaining independent feature velocity.

**The Impact:**
- **30% faster delivery** through shared platform components
- **Crash rate: 4.2% → 1.1%** preventing ~$500K in lost productivity  
- **Deployment velocity doubled** (monthly → bi-weekly releases)
- **12 platform capabilities** delivered in 8 months across 15,000 devices
- **45 minutes saved per worker/week** through improved performance and reliability
- **98% platform uptime** maintained throughout transformation

**Key Skills:** Platform Strategy • Stakeholder Alignment • Technical Trade-offs • Operational Excellence • Change Management

---

## 1. Context: Spotting the Pattern

When I joined the Kroger retail modernization project at Deloitte in 2022, I noticed something odd during sprint planning.

**App Team A** was building an auto-allocation feature to assign tasks based on available workers.

**App Team B** was building... the exact same feature. With their own logic. In parallel.

Neither team knew the other was building it.

This wasn't a one-time miss. It was systematic duplication happening because:
- The frontline engineering teams were building features independently
- No shared architecture or component library existed
- Communication gaps between teams meant repeated work
- The concept of a "platform team" supporting app teams was new to the client

**The scale of the problem:**
- **200 stores** across multiple states
- **40-60 Android devices per store** (~15,000 total devices)
- **2 frontline apps** being used by part-time and hourly store workers
- **Duplicate features** causing delivery delays and resource waste

### The Opportunity

I pitched a simple idea to my engineering team and client PMs:

"What if we built common components once, and both apps used them?"

They loved it. But turning that brainstorm into reality took 4-5 months of convincing stakeholders to embrace the unknown.

---

## 2. The Challenge: Fear of the Unknown

### The Pitch Process

**Who I pitched to:**
- Engineering leads (backend, data engineers, QA)
- Client Product Owners from both app teams
- Business stakeholders tracking store operations
- Store managers who would use the apps daily

**The resistance:**
- **"How do we even run a platform team?"** → New operating model, unclear roles
- **"Will this slow us down initially?"** → Fear of refactoring disrupting current velocity
- **Client hesitation:** "We don't know what we don't know"

**How I won them over:**

✅ **Pilot in a new store opening** → Low-risk environment to test the approach  
✅ **Small proof-of-concept** → Built one shared component, showed time savings  
✅ **Transparent trade-offs** → Acknowledged upfront investment for long-term gains  
✅ **Business case:** Showed how duplicate work was burning engineering time

It took **4-5 months** from pitch to materialization. The client's willingness to experiment was crucial.

---

## 3. Strategic Decisions: Building the Foundation

### Decision 1: Platform Team Structure

**The Setup:**
- **6-person platform team:**
  - Data Engineers (data model, infrastructure)
  - Backend Engineers (APIs, shared services)
  - Data Scientists (allocation logic, predictive features)
  - QA (testing shared components)
- **No UI developers** → Platform focused on backend/core functionality
- **2 app teams** with more UI-focused developers consuming platform capabilities

**Coordination Model:**
- **Quarterly syncs** with client PMs to align roadmaps
- **Monthly prioritization** across both app teams
- **Sprint planning internally** within platform team
- **My role:** Tie-breaker and facilitator (client PMs were final decision-makers)

### Decision 2: Prioritization Framework

**The Challenge:** How do you balance competing needs from 2 app teams?

**The Reality:**
"12 new capabilities delivered in 8 months" sounds impressive. The truth? That number is inflated.

What actually happened:
- App Teams brought feature requests
- I synced with their PMs to understand business drivers
- **When conflicts arose:** Presented capacity trade-offs to business stakeholders
- **Business had final say** on priorities
- Sometimes **deprioritized Team A's features** to accommodate Team B based on business urgency

**What I learned (the hard way):**

If I could redo this project, I'd create a **published prioritization matrix** that both app teams could see upfront:

```
Impact vs Effort Quadrant:
- High Impact + Low Effort = Build immediately
- High Impact + High Effort = Discuss with business
- Low Impact = App team builds independently
```

Instead of arguing priority in every sync, teams would **pre-assess their requests** against the framework. Only top-right quadrant items get platform team discussion.

**Result:** Less time debating, faster feature rollout.

---

## 4. Execution: The Big Moves

### The Scaling Challenge (100 → 200 Stores)

As Kroger expanded from 100 stores to 200 stores, we hit a wall.

**The symptoms:**
- Slow app response times
- Auto-allocation logic occasionally assigning tasks to wrong workers
- Increased crash rates as usage grew

**The diagnosis (RCA):**

My tech team identified the root cause:
- **Old data model** couldn't handle 2x scale
- Need to upgrade infrastructure: **Redis cache**, **Kubernetes optimization**
- Some features weren't optimized for latest code standards

**The fix:**

This wasn't my idea—it came from my core tech team. But I owned the **rollout strategy:**

1. **POC in low-traffic stores** (less busy states)
2. **Measure before/after metrics** (response time, allocation accuracy, uptime)
3. **Iterative rollout** from less busy → metropolitan states
4. **Monitor crash rates** at each phase

### The Results: New Data Model Changes

**Impact of infrastructure upgrade:**
- **30% time saved** across all workflows (faster response times, better allocation logic, less downtime)
- **Crash rate: 4.2% → 1.1%** (preventing ~$500K in lost productivity)
- **Platform uptime: 98%** maintained during migration
- **Release velocity: Monthly → Bi-weekly** (enabled by strategic planning to avoid app team clashes)

**How bi-weekly releases worked:**

We realized that a **shared platform team** meant release planning across both apps. We strategically timed rollouts:
- Features built for **Team A** would benefit **Team B** down the line (and vice versa)
- Coordinated deployments to avoid conflicts
- Client's experimental attitude helped us iterate quickly

---

## 5. The Human Side: Overcoming Resistance

### The Worker Pushback

When we started moving from **manual paper sheets → app-based task management**, we hit cultural resistance.

**The fear:**
- Part-time workers felt **threatened by micromanagement**
- Hourly workers worried apps would track them too closely
- Classic inertia: "Why change what works?"

**How we addressed it:**

✅ **Identified early adopter cohorts** who were open to new tech  
✅ **Educated them first** → Showed the bright side  
✅ **Framed as solving misinformation:** "Tech creates trust, not surveillance"  
✅ **Store manager testimonials:** Operations leads loved not manually sifting through attendance docs

**Feedback that stuck with me:**

Store managers said they had **more visibility into their workforce** and could plan shifts better. That's when I realized: This wasn't about technology. It was about giving frontline leaders the tools to do their jobs well.

**The transformation:**
Moving from physical papers to app-based work made me proud. Seeing store managers embrace the change felt like real impact.

---

## 6. What Didn't Work: The Allocation Failure

### The Incident

We optimized the **auto-allocation logic** to improve task assignment speed.

**What we didn't catch in testing:**

The new logic occasionally assigned tasks to workers who were **on their day off**.

### The Consequence

- **Understocked stores** → Tasks not completed
- **Underutilized pallets** → Inventory sitting idle
- **Store reported the issue** → We realized via field feedback, not monitoring

**The fix:**

✅ **Root cause analysis:** Logic didn't check PTO/day-off status properly  
✅ **Quick patch deployed** → Added validation layer  
✅ **Improved QA process:** Added "day-off scenarios" to test cases  
✅ **Losses were minimal** because we caught it fast

### The Learning

**Platform features affect multiple apps and hundreds of stores.**

A bug in shared logic doesn't just break one feature—it ripples across the entire ecosystem.

**What I'd do differently:**
- **Shadow mode testing** → Run new allocation logic in parallel with old logic, compare results
- **Store-level dashboards** → Give managers visibility into task allocation anomalies
- **Faster feedback loops** → Weekly check-ins with 5-10 pilot stores, not just relying on escalations

---

## 7. Key Takeaways: What I Learned About Platform PM Work

### 1. Platform thinking is about saying "no" strategically

When you're supporting multiple teams, **you can't build everything**. Learning to push back with data (capacity trade-offs, business priority alignment) is a superpower.

**My published prioritization framework idea?** That came from too many meetings arguing about feature priority. Pre-assessment would have saved hours.

### 2. Operational excellence > flashy features

The crash rate drop (4.2% → 1.1%) and uptime (98%) are unsexy metrics. But **they prevented $500K in lost productivity** and kept 15,000 devices running smoothly.

For platform PMs, **stability is a feature**.

### 3. Change management is half the job

The worker resistance taught me: **Technology doesn't fail because of bugs. It fails because humans don't trust it.**

Early adopters, education, and reframing the narrative (visibility ≠ micromanagement) were as critical as the product itself.

### 4. Set up processes for your successor

After I rolled off, the platform kept running smoothly. Why? **Clear processes, cadences, and communication norms** I established early.

Good PM work should run like clockwork, even when you're gone.

---

## 8. The Impact (By the Numbers)

### Performance Metrics
- **30% faster workflows** (response time, allocation logic, uptime improvements)
- **Crash rate: 4.2% → 1.1%** (3.1 percentage point drop)
- **Deployment velocity doubled** (monthly → bi-weekly releases)
- **98% platform uptime** throughout transformation

### Scale Metrics
- **12 platform capabilities** delivered in 8 months
- **15,000 devices** across 200 stores
- **45 minutes saved per worker per week** (frontline efficiency gains)
- **6-person platform team** supporting 2 app teams

### Business Metrics
- **~$500K productivity loss prevented** (via crash rate reduction)
- **100 → 200 store scale-up** supported by infrastructure upgrades
- **Zero major outages** during new data model migration

### Legacy Metrics
- **Platform still running** after my rolloff
- **Processes established:** Quarterly roadmap syncs, monthly prioritization, sprint planning cadences
- **Work runs like clockwork** → My proudest achievement

---

## 9. Reflection: Why This Work Mattered

This project wasn't about innovation or cutting-edge AI.

It was about **operational excellence** at scale.

**What made it hard:**
- Convincing a client to invest in a platform approach they'd never tried
- Balancing competing priorities from 2 app teams without clear frameworks
- Scaling infrastructure (100 → 200 stores) while maintaining 98% uptime
- Overcoming cultural resistance from frontline workers

**What made it valuable:**
- 15,000 devices ran more reliably every day
- Store managers could do their jobs better
- Engineering teams stopped duplicating work
- The platform outlived my tenure

**The PM skill this taught me:**

Platform product management is about **enabling others to move faster**. You don't ship features users see directly. You ship infrastructure that makes 10 other teams more effective.

That requires:
- **Systems thinking** → See patterns across teams
- **Stakeholder diplomacy** → Balance competing needs with data
- **Operational rigor** → Stability and uptime are non-negotiable
- **Change leadership** → Technology alone doesn't drive adoption

---

## Interview Talking Points

### 30-second version:
"At Kroger, I built a shared platform to eliminate duplicate backend work across 2 frontline apps serving 15,000 devices in 200 stores. We doubled deployment velocity, reduced crash rates from 4.2% to 1.1%, and saved 45 minutes per worker per week—all while scaling from 100 to 200 stores."

### 2-minute version:
"When I joined the Kroger modernization project, I noticed two app teams were independently building the same features with no communication. I pitched a platform approach: build common components once, serve both teams.

It took 4-5 months to get buy-in—clients were hesitant about the unknown. We piloted in a new store, proved the value, and scaled from there.

I led a 6-person platform team (data engineers, backend, QA) coordinating with 2 app teams through quarterly roadmaps and monthly prioritization. When priorities conflicted, I presented capacity trade-offs to business stakeholders—they made the final call.

The big win was upgrading our data model (Redis, Kubernetes) when we scaled from 100 to 200 stores. We rolled out iteratively—POC in low-traffic states, then metropolitan areas—saving 30% time across workflows while maintaining 98% uptime.

We also faced cultural resistance from store workers who felt micromanaged by apps. I identified early adopter cohorts, educated them on benefits, and reframed tech as solving misinformation—not surveillance.

Impact: Crash rates dropped 4.2% to 1.1%, deployment velocity doubled to bi-weekly, and we delivered 12 capabilities across 15,000 devices. After I rolled off, the platform kept running smoothly because we'd built strong processes.

What I learned: Platform PM work is about enabling others to move faster. You don't ship flashy features—you ship infrastructure that makes 10 teams more effective."

---

## Visual Artifacts (Recommended)

1. **Platform Architecture Diagram** → Show how 2 apps consume shared backend components
2. **Crash Rate Timeline** → Visual of 4.2% → 1.1% drop over 8 months
3. **Rollout Map** → US map showing phased rollout (low-traffic → metropolitan states)
4. **Prioritization Framework** → Impact/Effort quadrant with example features placed
5. **Before/After Workflow** → Manual paper sheets vs app-based task assignment flow

---

## Meta: How This Case Study Complements GenAI Story

**GenAI Platform (Pfizer):**
- Innovation under ambiguity
- 0→1 product building
- Rapid prototyping securing $200K funding
- Research-first approach (trust over speed)
- Handling shutdown with grace

**Kroger Platform (Retail):**
- Operational excellence at scale
- 1→N platform thinking
- Infrastructure optimization saving $500K productivity loss
- Balancing stakeholders across teams
- Building systems that outlive you

**Together they show:**
- **Strategic range:** Innovation (GenAI) + Execution (Kroger)
- **Stakeholder depth:** Researchers + Engineers + Frontline Workers + Business
- **Technical breadth:** AI/ML + Data Infrastructure + Mobile + Compliance
- **Scale experience:** 200 users (GenAI) + 15,000 devices (Kroger)

**Interview positioning:**

"My Pfizer work shows I can innovate in ambiguous spaces. My Kroger work shows I can execute at scale with operational rigor. Both required deep stakeholder alignment, but different muscles: GenAI needed trust-building with researchers; Kroger needed coordinating across app teams and change management with frontline workers."
