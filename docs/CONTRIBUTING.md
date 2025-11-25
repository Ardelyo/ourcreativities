# Panduan Kontribusi

> Terima kasih telah tertarik berkontribusi pada OurCreativities!

## Selamat Datang

Kami sangat menghargai kontribusi dari komunitas. Dokumen ini memberikan panduan untuk berkontribusi pada proyek OurCreativities.

## Cara Berkontribusi

Ada beberapa cara untuk berkontribusi:

**Code Contributions:**
- Fix bugs
- Tambah fitur baru
- Improve performance
- Refactor code

**Non-Code Contributions:**
- Tulis atau improve dokumentasi
- Report bugs
- Suggest fitur baru
- Design improvements
- Testing

## Getting Started

### Setup Development Environment

**Step 1: Fork Repository**
```bash
# Fork di GitHub, kemudian clone
git clone https://github.com/YOUR_USERNAME/ourcreativities.git
cd ourcreativities
```

**Step 2: Install Dependencies**
```bash
npm install
```

**Step 3: Create Branch**
```bash
git checkout -b feature/your-feature-name
# atau
git checkout -b fix/bug-description
```

**Step 4: Start Development Server**
```bash
npm run dev
```

### Development Workflow

**1. Make Changes**
- Edit files
- Test changes locally
- Ensure no errors

**2. Test Thoroughly**
- Test di desktop browser
- Test di mobile browser
- Check responsive design
- Verify animations work

**3. Commit Changes**
```bash
git add .
git commit -m "feat: add new feature"
```

**4. Push to Your Fork**
```bash
git push origin feature/your-feature-name
```

**5. Create Pull Request**
- Go to GitHub
- Click "New Pull Request"
- Fill in description
- Submit

---

## Code Style Guide

### General Principles

**Consistency:**
Ikuti style yang sudah ada di codebase.

**Clarity:**
Code harus mudah dibaca dan dipahami.

**Simplicity:**
Prefer simple solutions over complex ones.

### TypeScript

**Use Type Annotations:**
```typescript
// Good
const name: string = "OurCreativities";
function greet(name: string): string {
  return `Hello, ${name}`;
}

// Avoid
const name = "OurCreativities"; // implicit any
function greet(name) { // no types
  return `Hello, ${name}`;
}
```

**Interface over Type:**
```typescript
// Preferred
interface User {
  name: string;
  email: string;
}

// Use type for unions/primitives
type Status = 'active' | 'inactive';
```

### React Components

**Functional Components:**
```typescript
// Good - Named export
export const ComponentName = () => {
  return <div>Content</div>;
};

// Avoid default exports for components
```

**Props Interface:**
```typescript
interface ComponentProps {
  title: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Component = ({ title, onClick, children }: ComponentProps) => {
  // Component code
};
```

### Naming Conventions

**Files:**
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Pages: `PascalCase.tsx`

**Variables:**
```typescript
// camelCase untuk variables
const userName = "John";
const isActive = true;

// PascalCase untuk Components
const UserCard = () => {};

// UPPERCASE untuk constants
const API_URL = "https://api.example.com";
```

**Functions:**
```typescript
// camelCase
function fetchData() {}
const handleClick = () => {};

// Event handlers: handle*
const handleSubmit = () => {};
const handleChange = () => {};
```

### CSS/Tailwind

**Consistent Order:**
```typescript
// Layout → Spacing → Typography → Visual → Effects
className="flex items-center gap-4 px-6 py-3 text-lg font-bold bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
```

**Responsive Design:**
```typescript
// Mobile-first
className="text-sm md:text-base lg:text-lg"
```

**Custom Classes:**
Gunakan Tailwind utilities, avoid custom CSS kecuali necessary.

### File Organization

**Import Order:**
```typescript
// 1. React
import React, { useState, useEffect } from 'react';

// 2. External libraries
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

// 3. Internal components
import { Navbar } from './components/Navbar';

// 4. Utilities/helpers
import { formatDate } from './utils';

// 5. Types
import type { User } from './types';
```

---

## Commit Messages

### Format

Gunakan [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: Fitur baru
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvement
- `test`: Adding tests
- `chore`: Build process, dependencies

### Examples

```bash
feat(navbar): add mobile menu animation

fix(karya): resolve image loading issue on mobile

docs(readme): update installation instructions

style(components): format code with prettier

refactor(hero): simplify animation logic

perf(images): implement lazy loading

test(navbar): add unit tests for navigation

chore(deps): update react to v19.2.0
```

### Best Practices

**DO:**
- Use imperative mood ("add" not "added")
- Keep subject line under 50 characters
- Capitalize first letter
- No period at end
- Explain "what" and "why" in body

**DON'T:**
- Generic messages like "fix bug" atau "update"
- Multiple unrelated changes in one commit
- Commit broken code

---

## Pull Request Guidelines

### Before Submitting

**Checklist:**
- [ ] Code follows style guide
- [ ] No TypeScript errors
- [ ] Tested on multiple browsers
- [ ] Tested responsive design
- [ ] Documentation updated (if needed)
- [ ] Commit messages follow convention

### PR Title

Format sama seperti commit message:
```
feat(component): add new feature
```

### PR Description

**Template:**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- Tested on Chrome, Firefox, Safari
- Mobile testing done on iOS/Android
- No console errors

## Screenshots (if applicable)
[Add screenshots here]

## Related Issues
Closes #123
```

### Review Process

**Timeline:**
- Initial review: 1-3 days
- Feedback incorporated: ongoing
- Merge: when approved

**What We Look For:**
- Code quality
- Performance impact
- Breaking changes
- Documentation completeness

---

## Bug Reports

### How to Report

Use GitHub Issues dengan template:

```markdown
**Bug Description**
Clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll to '...'
4. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Screenshots**
If applicable

**Environment**
- OS: [e.g. Windows 11]
- Browser: [e.g. Chrome 120]
- Screen size: [e.g. 1920x1080]

**Additional Context**
Any other relevant information
```

---

## Feature Requests

### How to Suggest

Create GitHub Issue dengan template:

```markdown
**Feature Description**
Clear description of the feature

**Problem it Solves**
What problem does this address?

**Proposed Solution**
How do you envision this working?

**Alternatives Considered**
Other ways to solve this

**Additional Context**
Mockups, examples, references
```

---

## Code Review

### For Contributors

**Be Patient:**
Reviews may take time.

**Be Receptive:**
Accept feedback constructively.

**Be Responsive:**
Address review comments promptly.

### For Reviewers

**Be Specific:**
Point out exact issues and suggest fixes.

**Be Constructive:**
Frame feedback positively.

**Be Timely:**
Review PRs within reasonable time.

---

## Testing

### Manual Testing

**Checklist:**
- [ ] Feature works as intended
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] Responsive on tablet
- [ ] Works on Chrome
- [ ] Works on Firefox
- [ ] Works on Safari
- [ ] Animations smooth
- [ ] No performance regression

### Automated Testing (Future)

When test framework is added:

```bash
# Run tests
npm run test

# Run with coverage
npm run test:coverage
```

---

## Documentation

### When to Update Docs

**Always Update When:**
- Adding new component
- Changing component API
- Adding new page
- Changing project structure
- Adding dependencies

### Doc Locations

- General: `README.md`
- Architecture: `docs/ARCHITECTURE.md`
- Components: `docs/COMPONENTS.md`
- Pages: `docs/PAGES.md`
- Deployment: `docs/DEPLOYMENT.md`
- This file: `docs/CONTRIBUTING.md`

---

## Community

### Code of Conduct

**Be Respectful:**
Treat everyone with respect.

**Be Inclusive:**
Welcome diverse perspectives.

**Be Collaborative:**
Work together constructively.

**Be Professional:**
Keep discussions professional.

### Communication

**Questions:**
- GitHub Discussions (recommended)
- GitHub Issues (for bugs/features)

**Updates:**
- Watch repository for notifications
- Check changelog.md untuk updates

---

## Recognition

### Contributors

All contributors akan listed di:
- README.md
- CONTRIBUTORS.md (future)

### Hall of Fame

Significant contributors may be featured in:
- Project documentation
- Release notes
- Social media mentions

---

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

## Questions?

Jika ada pertanyaan tentang contributing:

1. Check dokumentasi ini
2. Search existing issues
3. Create new discussion
4. Contact maintainers

---

**Thank you for contributing to OurCreativities!**

Setiap kontribusi, sekecil apapun, sangat berarti untuk project ini.

---

**Last Updated:** November 2025  
**Version:** 5.0  
**Maintainer:** OurCreativities Team
