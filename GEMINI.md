# GEMINI.md — Baitulmaal Muamalat Landing Page

## 1. Project Overview

This project is the frontend implementation of the Baitulmaal Muamalat (BMM) landing page.

Current technology:

- React
- Vite
- JavaScript / JSX
- Vanilla CSS
- Static frontend only
- No backend
- No API integration
- No database
- No authentication
- No CMS
- No Tailwind CSS
- No UI framework

The current priority is visual implementation and responsive behavior.

Do not introduce additional frameworks, libraries, or dependencies unless explicitly requested.

---

# 2. Current Development Phase

The project is currently in the following phase:

Desktop design:
- IMPLEMENTED
- LOCKED

Mobile design:
- CURRENTLY BEING IMPLEMENTED
- Still requires visual refinement and responsive QA

The immediate goal is:

> Finish the mobile implementation while preserving the existing desktop implementation.

Do NOT perform large-scale refactoring while the mobile implementation is still in progress.

---

# 3. Design Source of Truth

The provided design screenshots are the primary visual source of truth.

When implementing UI:

1. Prioritize the provided design/reference screenshots.
2. Match the visual hierarchy, spacing, proportions, typography, imagery, colors, card shapes, and interactions as closely as reasonably possible.
3. Do not redesign the interface based on personal preference.
4. Do not "improve" the design unless explicitly requested.
5. Existing code should be used to understand how the design is currently implemented, but the provided design reference takes priority for visual decisions.

The user may provide:
- Desktop screenshots
- Mobile screenshots
- Section-specific screenshots
- Cropped screenshots
- Reference images

Treat these references as design requirements, not optional inspiration.

---

# 4. Mobile Design References

There are two types of mobile references.

## Full-page mobile reference

The long mobile screenshot represents the overall mobile landing page design.

Use it as the primary reference for:

- section order
- section spacing
- typography hierarchy
- card proportions
- image proportions
- carousel behavior
- content density
- overall visual rhythm
- mobile layout

## Bottom Navigation reference

A shorter mobile screenshot may show the page together with the mobile bottom navigation.

This screenshot is only a reference for:

- bottom navigation
- fixed navigation behavior
- mobile navigation layout
- navigation spacing
- active/inactive states

Do NOT treat the shorter screenshot as a replacement for the full-page mobile design.

Both references should be considered complementary.

---

# 5. Mobile Target

The primary mobile target is an iPhone-like viewport.

Prioritize these widths:

- 375px
- 390px
- 393px
- 430px

The design should behave naturally between these widths.

Do not optimize for only one exact pixel width.

Avoid hardcoded positioning that only works at one device width.

---

# 6. Desktop Lock

The existing desktop implementation is considered the current visual baseline.

When implementing or fixing mobile:

- Preserve desktop layout.
- Preserve desktop typography.
- Preserve desktop spacing.
- Preserve desktop component proportions.
- Preserve desktop carousel behavior unless explicitly requested otherwise.
- Prefer mobile-specific CSS/media queries for mobile changes.
- Do not modify desktop styles unless the user explicitly requests it.
- Do not redesign desktop while working on mobile.

After making significant mobile changes, verify that desktop remains visually unchanged.

Desktop should be treated as LOCKED.

---

# 7. Current File Structure

For the current development phase, it is intentional that the main JSX and CSS remain consolidated.

Current approach:

```text
src/
├── assets/
├── App.jsx
├── App.css
└── main.jsx

Do NOT automatically split App.jsx or App.css into many files.

The user has explicitly chosen to keep the HTML/JSX and CSS relatively consolidated during the initial visual implementation phase.

Large-scale componentization/refactoring should be postponed until the visual implementation is sufficiently complete.

When requested, refactoring can be performed as a separate task.

8. React Guidelines

Use React and JSX naturally.

Prefer:

semantic HTML
readable JSX
reusable logic where it is already obvious
data-driven rendering for repeated content
existing patterns already present in the project

Avoid:

unnecessary abstractions
premature componentization
unnecessary state
unnecessary effects
unnecessary dependencies
rewriting working sections without a reason

Do not introduce a new architecture merely because it may be theoretically cleaner.

The current priority is visual accuracy and stable responsive behavior.

9. CSS Guidelines

The project currently uses Vanilla CSS.

Use the existing CSS architecture and conventions.

Before adding a new CSS rule:

Search for an existing rule affecting the same element/component.
Reuse or modify the existing rule if appropriate.
Avoid creating duplicate rules.
Avoid unnecessary overrides.
Avoid excessive specificity.
Avoid !important unless there is a strong technical reason.
Avoid inline styles unless the value is genuinely dynamic.
Do not use CSS hacks to compensate for an incorrect layout structure.

Prefer clean layout systems:

flexbox
CSS grid
normal document flow
responsive media queries
gap
padding
margin
max-width
min()
max()
clamp()

Avoid excessive absolute positioning.

Absolute positioning is acceptable when the design genuinely requires it, such as:

decorative elements
badges
overlays
image overlays
floating controls
10. Mobile CSS Strategy

When fixing mobile:

Prefer modifying or extending the existing responsive CSS rather than creating unrelated duplicate rules.

Keep mobile rules organized.

Avoid this pattern:

@media (...) {
  .component {
    ...
  }
}

@media (...) {
  .component {
    ...
  }
}

@media (...) {
  .component {
    ...
  }
}

when the rules can reasonably be consolidated.

Do not repeatedly patch the same component with increasingly specific selectors.

Before adding a mobile override, inspect the existing mobile rules for that component.

11. Horizontal Overflow

Horizontal overflow should be intentional.

Allowed examples:

mobile carousel
horizontal card slider
horizontally scrollable content

Do not hide unexpected overflow as a workaround.

Avoid relying on:

body {
  overflow-x: hidden;
}

to conceal layout bugs.

If horizontal overflow appears unexpectedly:

Find the actual element causing the overflow.
Identify the root cause.
Fix the layout.
Only use overflow rules where they are intentionally required by the design.
12. Carousel Guidelines

The mobile design uses horizontal carousel patterns in several sections.

When a mobile carousel is required:

Preserve the intended card proportions.
Allow the next card to partially appear when shown in the reference.
Preserve the visual spacing between cards.
Ensure the carousel does not create unintended page-level horizontal scrolling.
Make touch/swipe interaction natural where applicable.
Preserve desktop behavior.
Do not replace a carousel with a vertical list unless explicitly requested.

The visible "peek" of the next card is an intentional part of the mobile visual design when present in the reference.

13. Bottom Navigation

The mobile landing page includes a bottom navigation reference.

When implementing the mobile bottom navigation:

It should remain fixed to the bottom when the design requires it.
Respect safe spacing around the navigation.
Preserve active/inactive states from the reference.
Do not allow content to become hidden behind the navigation.
Do not modify desktop navigation behavior unless explicitly requested.

The bottom navigation is a mobile-specific UI pattern.

14. Responsive Behavior

Do not simply shrink the desktop layout.

Mobile may intentionally use different layout behavior.

Examples:

Desktop:

3-column cards

Mobile:

horizontal carousel

Desktop:

large multi-column layout

Mobile:

stacked content

Desktop:

wide navigation

Mobile:

compact navigation + bottom navigation

Responsive implementation should follow the design reference rather than blindly scaling desktop dimensions.

15. Image and Asset Guidelines

Prefer existing project assets whenever the correct asset is already available.

Before creating or replacing an image:

Check the existing src/assets directory.
Search for an appropriate existing asset.
Reuse the existing asset when possible.
Do not create placeholder graphics if a real asset already exists.

Do not replace real BMM imagery with generic stock imagery.

Preserve:

aspect ratio
intended crop
image quality
border radius
object positioning

when matching the design.

16. Visual Accuracy

Visual accuracy is more important than unnecessary code abstraction during this phase.

Pay attention to:

spacing
alignment
typography
font size
font weight
line height
card width
card height
border radius
image cropping
gradients
shadows
colors
section spacing
carousel spacing
icon positioning
button dimensions

Do not make broad visual changes without a clear reference.

17. Typography

Use the typography already established in the project.

Do not introduce a new font unless explicitly requested.

Maintain the hierarchy between:

section label
section title
subtitle
body text
card title
card description
CTA
navigation label

Avoid arbitrary font-size changes simply to make text fit.

If text does not fit:

Check the layout width.
Check line height.
Check spacing.
Check font size.
Only then consider other adjustments.
18. Color System

Preserve the existing BMM visual identity.

Primary visual characteristics include:

BMM purple
green accent
white/light backgrounds
purple gradients
soft neutral surfaces

Do not introduce unrelated colors.

When an existing color/token is already used elsewhere, reuse it instead of creating a slightly different color.

19. Scope Control

Every task has a specific scope.

If the user asks to modify one section:

Modify only what is required for that section.
Do not redesign unrelated sections.
Do not refactor unrelated code.
Do not modify global styles unless necessary.
Do not modify desktop while fixing mobile unless explicitly requested.
Do not modify shared elements without checking their other usages.

Example:

If the task is:

Fix mobile Program section

Do NOT automatically change:

Hero
Navbar
Services
Donation
Testimonials
News
Footer
Desktop layout

unless the change is technically required and clearly explained.

20. Shared Style Safety

Before changing a shared CSS selector or shared JSX structure:

Search where it is used.
Determine whether the change affects desktop/mobile or multiple sections.
Prefer scoped changes when possible.
Verify all affected areas after the change.

Do not change a global selector casually.

21. Task Execution Workflow

For non-trivial tasks, follow this process:

Step 1 — Inspect

Inspect the relevant existing code before making changes.

Determine:

current implementation
relevant CSS
relevant assets
existing responsive rules
possible shared styles
potential side effects
Step 2 — Plan

For medium or large tasks, provide a short implementation plan before editing.

Do not spend excessive tokens describing obvious details.

Step 3 — Implement

Make the smallest reasonable set of changes required.

Step 4 — Verify

Run the project and verify the result.

For UI tasks, browser verification is strongly preferred.

Step 5 — Fix

If verification reveals issues, fix the issues instead of simply reporting them.

Step 6 — Summarize

Briefly report:

files changed
what changed
verification performed
remaining issues, if any
22. Small Task Workflow

For simple tasks such as:

changing spacing
changing a color
changing font size
fixing a small alignment issue
changing a card height
changing text
fixing a small responsive issue

Do NOT produce a large planning process.

Inspect the relevant code and make the smallest safe change.

Avoid unnecessary explanations and unnecessary code changes.

23. Medium/Large Task Workflow

For tasks such as:

implementing a new section
creating a new carousel
changing a section's responsive behavior
implementing a complex interaction
changing multiple related components

Use:

Inspect
↓
Short Plan
↓
Implement
↓
Run / Verify
↓
Fix

Do not make unrelated refactors during the task.

24. Visual QA Workflow

For visual tasks, do not rely only on whether the application builds successfully.

A successful build does NOT mean the UI is correct.

After significant UI changes:

Run the application.
Open the page in the browser.
Check desktop.
Check mobile.
Compare against the provided design reference.
Check for:
overflow
spacing
alignment
typography
image cropping
card dimensions
carousel behavior
fixed navigation
buttons
section spacing

If a visual mismatch is found, fix it.

25. Mobile QA

At minimum, verify the mobile layout around:

375px
390px
393px
430px

Pay particular attention to:

horizontal overflow
carousel width
card width
text wrapping
section spacing
fixed bottom navigation
image cropping
button size
navigation spacing
content hidden behind bottom navigation

Do not optimize only for one exact device width.

26. Desktop Regression Check

After meaningful mobile changes:

Verify that desktop remains visually unchanged.

At minimum check the primary desktop viewport used by the project/reference.

Mobile changes must not unintentionally modify:

desktop spacing
desktop card layout
desktop typography
desktop carousel
desktop navigation
desktop section structure

If desktop changes are necessary, explain why before making them.

27. Code Quality

Keep code understandable and maintainable.

Prefer:

descriptive variable names
clear JSX structure
simple logic
semantic HTML
existing project conventions

Avoid:

unnecessary abstraction
unnecessary dependencies
duplicated logic
duplicated CSS
dead code
unused imports
unused variables
console errors
excessive !important
arbitrary magic numbers

However:

Do not sacrifice visual accuracy merely to make the code theoretically cleaner.

The current phase prioritizes visual implementation first.

28. Refactoring Policy

Large refactoring is NOT part of normal feature implementation during the current phase.

Do not automatically:

split App.jsx
split App.css
introduce a new component architecture
introduce a state management library
introduce Tailwind
introduce a UI framework
introduce a CSS framework
introduce a carousel library

unless explicitly requested.

Refactoring will be performed later as a dedicated task after the visual implementation is stable.

29. Dependency Policy

Do not install new packages without explicit approval.

Before suggesting a new dependency:

Check whether the functionality can be implemented with the existing stack.
Consider whether the dependency is actually necessary.
Explain why it is needed.
Ask for approval before installing it.

The current project should remain lightweight.

30. Error Handling

When encountering an error:

Identify the root cause.
Inspect relevant files.
Avoid random trial-and-error changes.
Fix the smallest underlying problem.
Re-run the relevant verification.

Do not hide errors with workarounds.

Do not suppress warnings/errors simply to make the terminal look clean.

31. ESLint and Build

The project should continue to build successfully.

After significant changes:

npm run build

If linting is available, also run:

npm run lint

Do not introduce new lint errors.

When fixing existing lint errors, do not modify visual behavior unnecessarily.

32. Token Efficiency

The user is intentionally using AI-assisted development and wants efficient token usage.

Therefore:

Do not repeat information already available in the project.
Do not explain obvious code.
Do not output unnecessary long plans for simple tasks.
Inspect only relevant files when possible.
Avoid repeatedly reading the same files without a reason.
Avoid rewriting large files when a small targeted change is sufficient.
Prefer concise progress summaries.
Do not perform unrelated improvements.
Do not refactor code merely because it could be cleaner.

For simple tasks, act directly.

For complex tasks, reason carefully before editing.

33. Do Not Assume Previous AI Decisions Are Correct

Existing code may have been generated or modified by AI.

Do not automatically preserve an incorrect implementation just because it already exists.

When encountering a problem:

inspect the current implementation
identify the actual cause
distinguish intentional design behavior from accidental implementation
fix the root cause when practical

However, do not rewrite working code unnecessarily.

34. Before Editing Existing Code

Before modifying an existing section:

Check:

1. What currently controls this UI?
2. Is there already a CSS rule for it?
3. Is it shared with another section?
4. Does the change affect desktop?
5. Does the change affect mobile?
6. Is the requested behavior already partially implemented?

Then make the smallest safe change.

35. Browser Verification

For UI changes, browser verification is preferred over relying only on source code inspection.

When possible:

open the running application
inspect the affected section
interact with the UI
resize/check relevant viewport sizes
verify carousel behavior
verify fixed navigation
verify no unexpected overflow

Do not claim that a UI issue is fixed without actually verifying it when browser verification is available.

36. Communication Style

When reporting completed work, be concise.

Use this format when appropriate:

Implemented:
- ...
- ...

Changed:
- ...

Verified:
- Desktop
- Mobile 390px
- Build

Remaining:
- ...

Do not provide unnecessary explanations unless requested.

37. Important Principle

The user is the final design decision maker.

The AI agent should:

inspect
reason
implement
test
identify problems
suggest improvements when useful

But should NOT independently redesign the product.

When design intent is unclear:

inspect the provided reference
inspect the existing implementation
make the smallest reasonable interpretation
ask the user if the ambiguity materially affects the result
38. Current Priority

Until explicitly changed by the user, prioritize tasks in this order:

Finish mobile landing page implementation.
Preserve desktop implementation.
Match provided mobile references.
Fix responsive issues.
Perform visual QA.
Fix build/lint issues that are relevant.
Avoid unnecessary refactoring.
After visual implementation is stable, perform a dedicated refactoring/cleanup phase.
39. Final Rule

When uncertain, prefer:

Inspect first.
Change less.
Preserve existing behavior.
Follow the design reference.
Verify visually.
Do not touch unrelated sections.

The goal is not to generate the most code.

The goal is to produce the correct UI with the smallest safe and maintainable change.


### Saya sengaja membuat versi ini agak "ketat"

Karena dari project kamu yang saya lihat, problem yang paling mungkin terjadi kalau terus vibe coding adalah bukan AI **nggak bisa bikin UI**, tetapi AI terlalu gampang melakukan:

```text
"ada masalah"
      ↓
tambah CSS
      ↓
masalah lain
      ↓
tambah override
      ↓
!important
      ↓
desktop ikut berubah
      ↓
patch lagi