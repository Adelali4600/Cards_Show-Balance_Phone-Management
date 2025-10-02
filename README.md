# Cards_Show-Balance_Phone-Management

## *Project Structure:*
Main Hub (index.html)
The central landing page featuring a responsive navbar that connects all three applications: Cards, Phone Management, and InstaPay.

### Cards Application

- cards.html: Product catalog display page with dynamic card rendering
- data.js: Contains 13 product objects with details like title, price, category, and images from various categories (clothing, jewelry, electronics)
- cards.js: Implements renderCards() function that dynamically generates Bootstrap cards from the product data

### InstaPay/ATM Application

- atm.html: Banking simulation interface with balance display, transaction inputs, and history table.

- atm.js: Complete banking system featuring:
1. Balance management and display
2. Deposit/withdrawal processing with validation
3. Transaction history tracking
4. Overdraft protection with SweetAlert error messages
5. Dynamic UI updates

### Phone Management Application

- **phoneManage.html:** CRUD interface for phone inventory with forms and data tables
- **phoneManage.js:** Full inventory management system providing:
- **Create:** Add new phones with name, price, quantity
- **Read:** Display phones in organized table format
- **Update:** Edit existing entries with form pre-population
- **Delete:** Remove items with confirmation dialogs
- State Management: Toggle between add/edit modes

### Technical Features :

- Vanilla JavaScript: ES6+ syntax with clean, modular functions
- Bootstrap Integration: Consistent responsive design across all apps
- SweetAlert2: Enhanced user notifications and confirmations
- DOM Manipulation: Dynamic content rendering and form handling
- Array Methods: Efficient data manipulation using forEach, splice, push
- Event Handling: Interactive buttons and form submissions

### Architecture Strengths :

- Modular Design: Each application is self-contained yet integrated
- Consistent Navigation: Universal navbar enables seamless app switching
- Responsive Layout: Mobile-friendly design across all components
- Error Handling: Proper validation and user feedback systems
- Clean Code: Well-commented functions with descriptive naming
