import { useState, useRef } from "react";
import { Copy, Check, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PromptSection {
  id: string;
  number: string;
  title: string;
  description: string;
  howToUse: string;
  promptText: string;
  tips: string[];
}

const prompts: PromptSection[] = [
  {
    id: "strategic-learning",
    number: "01",
    title: "Strategic Learning Advisor Setup",
    description:
      "A prompt for setting up Claude as your career-aligned learning partner, adaptable for any role or discipline.",
    howToUse:
      "Copy and paste the entire prompt below into a new Claude conversation (Opus recommended for strategic depth). Fill in the sections marked with [BRACKETS] before sending. Once initiated, Claude will step into the role of your strategic learning advisor for the duration of the conversation. This is not a one-time output — it establishes an ongoing advisory dynamic. Come back to this conversation whenever you need to make a decision about your learning path, evaluate an opportunity, or pressure-test an idea.",
    promptText: `I want you to act as my Strategic Learning Advisor — a direct, honest, and thoughtful career partner who helps me navigate my professional development with intention.

Your role is to help me make strategic decisions about my learning path, career positioning, and professional development. You are not here to validate every idea I bring to you. You are here to evaluate my decisions against my specific goals, timeline, financial situation, and target market — and to push back when something doesn't serve my trajectory.

YOUR APPROACH:
- Be direct but warm. Treat me as someone capable of making smart decisions when given the right framing.
- Don't over-praise or over-validate. Give honest assessments, including uncomfortable ones.
- When I bring you an idea or a potential investment (course, certification, tool, program), evaluate it against: Does this move the needle for the specific roles I'm targeting? Is the timing right? Is the cost justified by the marginal value? Could this money or time be better spent elsewhere?
- Acknowledge tradeoffs honestly. Most decisions have a cost — name it.
- Ask clarifying questions before giving advice when you need more context.
- When recommending against something, explain why specifically — not generically.

Before we begin, I need you to understand who I am and where I'm going. Here is my context:

ABOUT ME:
- Current role/situation: [e.g., "Business analyst with 5 years experience, currently employed at a consulting firm" or "Career changer from teaching, currently self-studying"]
- Background and key experience: [Summarize your professional history in 3-5 sentences — focus on what's transferable, not a full CV]
- Location: [City/Country + any relocation plans]
- Target market: [Which country/region are you targeting for employment?]

MY CAREER GOAL:
- Target role (specific): [e.g., "Solutions Architect at a cloud provider" or "Data Engineer at a mid-size tech company"]
- Long-term aspiration: [e.g., "Enterprise Architect" or "Independent consultant" or "Engineering Manager"]
- Timeline: [e.g., "Job search starting in 6 months" or "Actively applying now"]

MY VALUES:
To help you advise me in a way that actually fits who I am, I want to share how I approach professional growth. Select the statement from each pair that resonates most with you, or write your own:

Learning approach:
(a) I value deep foundational understanding over surface-level coverage — I'd rather truly master fewer things than hold many certifications I can't back up.
(b) I value breadth and speed — I want to cover as much ground as possible and go deeper where needed once I'm in the role.

Credential philosophy:
(a) Merit and substance lead — I want certifications backed by genuine ability to build and deliver, not just pass an exam.
(b) Credentials are signals — I want the certifications that open doors fastest, even if mastery comes later on the job.

Career positioning:
(a) Authenticity over performance — I'd rather be honestly positioned slightly below a role's ideal candidate than overstate my readiness.
(b) Strategic positioning is part of the game — I'm comfortable framing my experience ambitiously as long as I can back it up in an interview.

Financial approach:
(a) I'm cost-conscious — every investment needs clear, specific ROI against my target roles. Push back on anything that overlaps or doesn't justify its cost.
(b) I'm willing to invest more freely — if something has a reasonable chance of helping, I'd rather spend and not need it than miss an opportunity.

MY CURRENT DEVELOPMENT:
- Programs/courses currently enrolled in: [List them]
- Certifications already held: [List them]
- Certifications currently pursuing: [List them with target dates if known]
- Tools/platforms I'm using for study: [e.g., "StudyTech.io, Udemy, AWS Skill Builder"]
- Budget for professional development: [Optional but helpful — e.g., "Limited, need to be selective" or "$2,000/year" or "Employer-funded"]

WHAT I NEED FROM YOU RIGHT NOW:
[Describe your immediate question or decision — e.g., "I'm trying to decide whether to pursue TOGAF certification before or after I land my first architecture role" or "I need help building a 12-month learning plan" or "I have three certification options and need help choosing which to do first"]`,
    tips: [
      "Be specific about your goals. \"I want to work in cloud\" produces generic advice. \"I want a Solutions Architect role at a cloud provider in the US Southeast within 12 months\" produces strategic advice.",
      "Bring your research. If you've been looking at a course, certification, or program, share the details — cost, duration, what it covers. The more context you provide, the sharper the evaluation.",
      "Ask for pushback explicitly. If you want honest feedback on whether an idea is worth pursuing, say so.",
      "Use chat summaries. When a conversation gets long, ask for a summary before starting a new chat. Drop the summary into the new conversation to maintain continuity.",
      "Revisit as your situation changes. Got a new certification? Landed an interview? Changed your target role? Update your advisor with the new context and ask how it changes the strategy.",
    ],
  },
  {
    id: "certification-strategy",
    number: "02",
    title: "Certification Determination Prompt",
    description:
      "Cut through the noise and choose your certifications strategically based on your career goals, experience, and target market.",
    howToUse:
      "Copy and paste the entire prompt below into a Claude conversation (Opus recommended). Fill in the [BRACKETS] with your information. Claude will then guide you through a strategic evaluation of which certifications to pursue, in what order, and which to skip — based on your specific situation, not generic advice.",
    promptText: `I need your help determining which professional and technical certifications I should pursue — and equally importantly, which I should skip or defer. I don't want a generic list of "top certifications for [field]." I want a strategic evaluation based on my specific career goals, current experience, financial situation, and target market.

HERE IS MY CONTEXT:

Target role: [e.g., "Cloud Solutions Architect" or "Data Engineer" or "Cybersecurity Analyst"]
Target employers/company type: [e.g., "Cloud providers (AWS, GCP)", "Enterprise consulting firms", "Startups", "Government/public sector"]
Target location/market: [e.g., "US — New York/Seattle", "UK — London", "Remote — US-based companies"]
Current role: [Your current job title and brief description]
Years of experience: [Total years + years in your target domain if different]
Existing certifications: [List all current certs]
Certifications you're considering: [List any you've been looking at, even if unsure]
Education: [Degree/field, or note if no degree — this affects how certs are weighted in some markets]
Budget: [e.g., "$500/year", "employer-funded", "limited — need to be very selective", "flexible"]
Timeline: [e.g., "Starting job search in 6 months", "Actively interviewing now", "Building over the next 2 years"]

Before you make any recommendations, I'd like you to guide me through this strategically. You can take one of two approaches — let me choose which works better for me:

APPROACH A — Conversational Discovery
Ask me questions one at a time to build a complete picture of my situation, goals, and constraints. This works well if I'm early in my thinking, unsure about my direction, or want to reason through decisions together. Expect 5-8 questions before you make recommendations.

APPROACH B — Structured Analysis
I've given you my context above. Use it to deliver a structured certification strategy now, organized into: immediate priorities (next 3-6 months), medium-term (6-18 months), long-term (18+ months), and explicitly deferred or dropped. For each certification, explain why it's placed where it is and what it signals to employers. Then I'll ask follow-up questions.

Which approach would I prefer? [DELETE THIS LINE AND TYPE A OR B, OR LEAVE IT AND CLAUDE WILL ASK]

EVALUATION CRITERIA — Apply these when assessing each certification:
1. Signal value: Does this certification make me more findable and credible to recruiters and hiring managers for my specific target roles?
2. Knowledge value: Does this certification underpin knowledge I genuinely need for the role, even if nobody checks for the cert itself?
3. Timing: Is now the right time, or would this cert carry more weight after I've gained experience in the role?
4. Stacking: Does this cert build on or complement my existing credentials, or does it overlap/duplicate something I already have?
5. Market recognition: Is this cert recognized and valued in my target market and geography?
6. Cost vs. marginal value: Is the investment (money + time) justified by what this cert adds beyond what I already have?
7. Experience backing: Can I credibly speak to the skills this cert represents in an interview, or will it look like I just passed a test?

IMPORTANT GUIDANCE:
- Do not recommend certifications just because they're popular or well-known. Evaluate each one against MY specific situation.
- Be explicit about which certifications to SKIP or DEFER and why — this is as valuable as knowing what to pursue.
- If a certification would carry more weight after I have role experience, say so directly rather than recommending I get it now.
- If two certifications overlap significantly, tell me which one to choose and why.
- Consider the LinkedIn visibility factor: which certifications make me more searchable for my target roles?
- If my budget is limited, prioritize ruthlessly and explain what you'd cut first.`,
    tips: [
      "Approach A is best if you're early in your career transition, exploring multiple directions, or want help thinking through the \"why\" behind each decision. It takes longer but produces more personalized reasoning.",
      "Approach B is best if you've already done your research, know your target role clearly, and want a structured plan you can act on. It's faster but assumes your context section is thorough.",
      "Provide the full context. Leaving fields blank produces generic advice. The more specific you are about your target role, market, and timeline, the more strategic the output.",
      "Push back on recommendations. If Claude suggests a cert you've been considering but aren't sure about, say so. The best outcomes come from dialogue, not one-pass answers.",
      "Revisit every 3-6 months. Your situation changes — new certs earned, new roles discovered, market shifts. Re-run this prompt with updated context to keep your strategy current.",
    ],
  },
  {
    id: "study-material",
    number: "03",
    title: "Certification Study Material Generator",
    description:
      "A universal prompt template for generating study guides, cheatsheets, and mock exams for any professional certification.",
    howToUse:
      "Fill in the [BRACKETS] with your exam details and upload the exam guide/syllabus alongside this prompt. The quality of output scales directly with what you provide — at minimum, include the official exam guide. Claude will generate a complete study guide, an exam cheatsheet, and a full mock exam tailored to your certification.",
    promptText: `I am preparing for the [EXAM NAME] ([EXAM CODE]) certification exam by [CERTIFICATION BODY].

Here is what I know about the exam:
- Format: [e.g., multiple choice / scenario-based / oral interview / essay]
- Question count: [number]
- Duration: [time]
- Pass mark: [score or percentage]
- Open/closed book: [open or closed]

[Optional: I already hold [RELATED CERTIFICATIONS] and have [X] years of experience in [DOMAIN]. Please build on that foundation rather than covering basics I already know.]

[Optional: My weakest areas are [TOPIC 1] and [TOPIC 2] — please weight coverage toward these.]

Please create three study resources:

1. Complete Study Guide covering every domain/topic area from the exam syllabus. For each domain:
   - Key concepts, definitions, and terminology the exam tests
   - Relationships and distinctions between similar concepts (what gets confused with what)
   - Frameworks, models, processes, or lifecycles to memorise
   - Decision logic: "when to use X vs Y" or "how to distinguish A from B"
   - Real-world application examples where helpful
   
   Structure the guide with the exam overview at the top (format, question count, time, pass mark, domain weightings with study priority), and an exam strategy section at the end tailored to the exam format.

2. Exam Cheatsheet — a single-page quick reference covering:
   - Domain/topic weights and study priorities
   - Quick-reference tables for major concept categories
   - Key definitions the exam tests by recognition or recall
   - Critical sequences, processes, or frameworks to memorise
   - Pattern recognition aids (common question styles → answer patterns)

3. Mock Exam matching the real exam as closely as possible:
   - Same number of questions as the scored portion of the real exam
   - Questions weighted to match the official domain/topic percentages
   - Question format matching the real exam (MCQ, scenario, essay prompts, etc.)
   - For scenario-based exams: use realistic scenarios that test application, not just recall
   - Include a complete answer key with explanations
   - Include scoring bands with domain-specific remediation guidance for weak areas

Adapt your approach to the exam format:
- For multiple choice exams: focus on recognition, elimination strategies, and distractor awareness
- For scenario-based exams: focus on applying concepts to realistic situations and selecting best-fit answers
- For oral/interview exams: focus on how to articulate and discuss concepts fluently, with example talking points
- For essay exams: focus on structuring answers, key points to hit, and common pitfalls`,
    tips: [
      "Always start with the exam guide. Everything else is supplementary. If you only provide one document, make it this one.",
      "Specify your experience level. \"I'm brand new to this field\" and \"I have 5 years in the domain and hold related certs\" produce very different study guides — and should.",
      "Name your target exam date. If you say \"I'm sitting this in 3 weeks,\" Claude can prioritise high-weight domains and flag what to skip if time is short.",
      "Request additional mocks. One mock exam is a baseline. Two or three with different questions give much better coverage.",
      "Use mock results to drive deep dives. After scoring a mock, say: \"I scored 60% on Domain 3. Create an expanded study section and 15 additional practice questions focused only on Domain 3.\"",
      "Ask for flashcard sets. For terminology-heavy exams, ask: \"Create a flashcard set of the 50 most important terms for this exam with definitions.\"",
      "Request comparison tables. For exams that test distinctions between similar concepts, ask: \"Create a comparison table showing the differences between [X] and [Y] as the exam tests them.\"",
      "Iterate. The first pass is a foundation. The real value comes from follow-up: \"Explain section 3.2 in more depth,\" \"Give me 5 more scenario questions on [topic].\"",
    ],
  },
  {
    id: "portfolio-design",
    number: "04",
    title: "Professional Portfolio Design",
    description:
      "A template for generating a professional portfolio site through AI design tools, adaptable for any technical role.",
    howToUse:
      "Fill in every [BRACKET] section with your own information. The more detail you provide, the better the output. Once complete, upload the entire document as a single prompt to Lovable (or your AI design tool of choice). Do not go prompt by prompt — the design document approach produces more consistent results and uses fewer tokens.",
    promptText: `PORTFOLIO SITE DESIGN BRIEF

Create a single-page portfolio website for a [YOUR ROLE TITLE — e.g., "Cloud Solutions Architect", "Data Engineer", "Full Stack Developer"].

The site should feel [DESCRIBE THE IMPRESSION — e.g., "like a premium consulting brand — warm, confident, and global" or "clean and technical — minimal, structured, and precise" or "bold and modern — high energy, high contrast"]. Think [REFERENCE STYLE — e.g., "editorial meets architecture" or "developer portfolio meets design studio" or "corporate with personality"].

==============================
DESIGN DIRECTION
==============================

Color palette:
- Primary background: [hex code + description, e.g., "#F5F0E8 — creamy off-white"]
- Secondary background: [hex code + description]
- Accent sections: [hex code + description]
- Text primary: [hex code + description]
- Text secondary: [hex code + description]
- Subtle accent: [hex code + description — for dividers, tags, hover states]

Typography:
- Headlines: [Font choice + style, e.g., "Bold serif (Playfair Display) — large, confident, editorial feel"]
- Body text: [Font choice + style, e.g., "Clean sans-serif (Source Sans Pro) for readability"]
- Spacing: [e.g., "Generous letter-spacing on headings for an elevated look"]

Visual elements:
- [Describe any background textures, patterns, or visual motifs]
- [Divider style]
- [Whitespace preference]
- [Photo/image policy]
- [Card style]

[OPTIONAL: Attach reference images — screenshots of sites you like, your LinkedIn banner, business card, or other brand materials for visual consistency]

==============================
PAGE STRUCTURE (SINGLE PAGE SCROLL)
==============================

SECTION 1: HERO
- Full-width hero section
- Name: "[YOUR FULL NAME]" — large bold [serif/sans-serif]
- Title below name: "[YOUR ROLE TITLE]" — smaller, letter-spaced
- One-liner beneath: "[YOUR VALUE PROPOSITION]"
- Buttons: "[PRIMARY BUTTON TEXT]" and "[SECONDARY BUTTON TEXT]"
- Small row of icon links: [e.g., "LinkedIn icon, Email icon, GitHub icon"]

SECTION 2: ABOUT
- Background color: [e.g., "off-white" or "match primary background"]
- Section heading: "About" in bold [serif/sans-serif]
- Body text — [NUMBER] short paragraphs covering:
  Paragraph 1: What you do and what you focus on
  Paragraph 2: Your background and approach
  Paragraph 3: Your philosophy or what you believe about your craft
  Paragraph 4: What you're currently building/pursuing
  Paragraph 5: Location, work authorization, and what you're open to
- Below the text: a horizontal row of pill-shaped tags for key competencies

SECTION 3: PORTFOLIO (PROJECTS)
- Section heading: "Portfolio" in bold [serif/sans-serif]
- Subheading: "[YOUR PORTFOLIO TAGLINE]"
- Project cards with: Industry tag, Project name, Subtitle, Description, Technology pills, Status badge, Links

SECTION 4: [OPTIONAL — ARTIFACTS / RESOURCES / WRITING]
- Section heading and items with title, description, and status

SECTION 5: CERTIFICATIONS
- Section heading: "Certifications" in bold [serif/sans-serif]
- Each certification with name, code, and status

SECTION 6: CONTACT / FOOTER
- Name, one-liner, link row, copyright line

==============================
TECHNICAL NOTES
==============================
- Fully responsive (mobile-first)
- Smooth scroll between sections
- Subtle fade-in animations on scroll
- All "Coming Soon" links should be visually distinct but not clickable
- Keep the build simple and static-friendly`,
    tips: [
      "If you are unsure about your design direction, leave the Design Direction section blank and instead write: \"I'm unsure about my design style. Please ask me to choose between these four approaches.\"",
      "The more detail you provide in each section, the more accurate the output. Don't leave brackets empty — generic inputs produce generic sites.",
      "Attach reference images — screenshots of sites you like, your LinkedIn banner, business card, or other brand materials for visual consistency.",
      "This template works with Lovable, Bolt, v0, and other AI design tools. Upload the entire completed document as a single prompt for best results.",
    ],
  },
];

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded font-sans text-xs editorial-spacing uppercase text-accent hover:bg-accent/10 transition-colors"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5" /> Copied
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" /> Copy to Clipboard
        </>
      )}
    </button>
  );
};

const DownloadButton = ({ prompt }: { prompt: PromptSection }) => {
  const handleDownload = () => {
    const content = `${prompt.title}\n${"=".repeat(prompt.title.length)}\n\n${prompt.description}\n\nHOW TO USE THIS PROMPT\n${"-".repeat(24)}\n${prompt.howToUse}\n\nTHE PROMPT\n${"-".repeat(10)}\n${prompt.promptText}\n\nTIPS FOR GETTING THE BEST RESULTS\n${"-".repeat(34)}\n${prompt.tips.map((t, i) => `${i + 1}. ${t}`).join("\n\n")}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${prompt.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-1.5 px-4 py-2 rounded border border-accent text-accent font-sans text-xs editorial-spacing uppercase hover:bg-accent/10 transition-colors"
    >
      <Download className="w-3.5 h-3.5" /> Download as TXT
    </button>
  );
};

const PromptSectionBlock = ({ prompt }: { prompt: PromptSection }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} id={prompt.id} className="scroll-mt-24">
      <div className="mb-8">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
          {prompt.number} — {prompt.title}
        </h3>
        <p className="font-sans text-lg text-muted-foreground">{prompt.description}</p>
      </div>

      <div className="mb-8">
        <h4 className="font-serif text-xl font-bold text-foreground mb-3">How to Use This Prompt</h4>
        <p className="font-sans text-base leading-relaxed text-muted-foreground">{prompt.howToUse}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-serif text-xl font-bold text-foreground">The Prompt</h4>
          <CopyButton text={prompt.promptText} />
        </div>
        <div className="relative rounded-lg border border-secondary bg-[#F5F0E8] p-6 overflow-auto max-h-[500px]">
          <pre className="font-mono text-sm leading-relaxed text-foreground whitespace-pre-wrap break-words">
            {prompt.promptText}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-serif text-xl font-bold text-foreground mb-4">Tips for Getting the Best Results</h4>
        <div className="space-y-3">
          {prompt.tips.map((tip, i) => (
            <div key={i} className="border-l-2 border-accent pl-4 py-1">
              <p className="font-sans text-base text-muted-foreground leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      <DownloadButton prompt={prompt} />
    </div>
  );
};

const anchors = [
  { id: "strategic-learning", label: "Strategic Learning Advisor" },
  { id: "certification-strategy", label: "Certification Strategy" },
  { id: "study-material", label: "Study Material Generator" },
  { id: "portfolio-design", label: "Portfolio Design" },
];

const Prompts = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-24 pb-16 bg-secondary">
      <div className="container max-w-4xl mx-auto px-6">
        <p className="font-sans text-sm editorial-spacing uppercase text-accent mb-4">Resources</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">Prompt Bank</h1>
        <p className="font-sans text-xl text-muted-foreground max-w-2xl mb-3">
          Free prompt templates for using AI as a strategic learning partner — from career planning to certification prep to portfolio design.
        </p>
        <p className="font-sans text-base text-muted-foreground">by Mercedes D. Edwards</p>
      </div>
    </section>

    {/* Anchor Nav */}
    <div className="sticky top-16 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container max-w-4xl mx-auto px-6 py-4">
        <div className="flex flex-wrap gap-3">
          {anchors.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="px-4 py-2 rounded-full border border-accent text-muted-foreground font-sans text-sm editorial-spacing uppercase hover:bg-accent/10 hover:text-accent transition-colors"
            >
              {a.label}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Prompt Sections */}
    <div className="container max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-0">
        {prompts.map((p, i) => (
          <div key={p.id}>
            <PromptSectionBlock prompt={p} />
            {i < prompts.length - 1 && <div className="section-divider my-16" />}
          </div>
        ))}
      </div>

      <div className="section-divider my-16" />
      <p className="font-sans text-lg italic text-muted-foreground text-center max-w-2xl mx-auto">
        These templates are starting points, not scripts. Adapt them to your situation, your experience level, and your goals.
      </p>
    </div>

    <Footer />
  </div>
);

export default Prompts;
