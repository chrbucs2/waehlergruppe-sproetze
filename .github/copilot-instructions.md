# Copilot Instructions

## General expectations
- Keep the codebase clean, readable, and easy to follow.
- Follow Clean Code principles: meaningful names, small focused functions, single responsibility, clear structure, and consistent formatting.
- Prefer simple and explicit solutions over clever or hidden logic.
- Do not leave dead code behind when changing a feature or file.

## Dead code and cleanup
- Remove unused code, unused imports, unused variables, stale helpers, obsolete configs, and dead styles whenever they are discovered during a change.
- If a feature or refactor makes old code unreachable or no longer used, delete it instead of leaving it in place.
- Keep the project tidy even when the task is small: no lingering dead branches, duplicate logic, or unused CSS/JS fragments.
- Before finishing a task, check whether related files still contain remnants of old implementations and clean them up as part of the same change.

## Validation
- Validate changes with the smallest existing build, test, or lint command that covers the modified behavior.
- Do not add new tooling just to satisfy a local preference.
- If a change affects UI or config, verify that the app still builds successfully.

## Scope discipline
- Keep edits surgical and directly related to the task.
- Do not fix unrelated issues unless they are tightly coupled to the code being changed.
- Preserve existing behavior unless the change explicitly requires updating it.
