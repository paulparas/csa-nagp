# Insurance Microfrontend Application

## Overview
This project is a microfrontend (MFE)-based client-side application for an insurance company. It allows users to:
1. View their insurance details.
2. Search for a policy and pay premiums.

The application is built using **Angular** with the **@angular-architects/module-federation** package to handle MFE integration. The solution consists of:
- A **container application** hosting two MFEs.
- Two **microfrontends**:
  - **Insurance Details MFE**: Displays all insurance policies of the user and listens for updates from the Premium Payment MFE.
  - **Premium Payment MFE**: Provides functionality to search for policies and pay premiums.

The application uses **local storage** for mock data storage, **SCSS** as a CSS pre-processor, **web workers** for long-running processes, and **Webpack** for bundling.

### Features:
1. **Container App**:
   - Hosts both microfrontends.
   - Uses `manifest.json` for defining remote URLs for MFEs.
2. **Insurance Details MFE**:
   - Lists all insurance policies.
   - Updates policy details when a payment event is emitted by the Premium Payment MFE.
3. **Premium Payment MFE**:
   - Allows users to search for a policy using `policyId`.
   - Simulates premium calculation using a web worker.
   - Implements OWASP Injection (A03:2021) to sanitize user inputs.

### Cross-Cutting Concerns:
- **Data Sharing**:
  - Achieved via a shared service library that acts as an event bus between the MFEs.
- **CSS Pre-Processing**:
  - SCSS is used across the application.

---

## Directory Structure
```
Client Side Architecture ->
    projects ->
         container-app
         mfe-insurance-details
         mfe-premium-payment
         shared
 package.json
 angular.json
 tsconfig.json
```

---

## Prerequisites
- Node.js (>=16.x)
- Angular CLI (>=15.x)
- npm (>=8.x)

---

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## Build and Run
### Running Locally
To run all applications locally in parallel:
```bash
npm run start
```
This will serve:
- **Container Application**: Available at [http://localhost:4200](http://localhost:4200)
- **Insurance Details MFE**: Available at [http://localhost:4201](http://localhost:4201)
- **Premium Payment MFE**: Available at [http://localhost:4202](http://localhost:4202)

### Building the Applications
To build all applications for production:
```bash
npm run build
```
The built artifacts for all apps will be available in their respective `dist/` directories.

To build individual applications:
- **Container App**:
  ```bash
  npm run build:container
  ```
- **Insurance Details MFE**:
  ```bash
  npm run build:mfe1
  ```
- **Premium Payment MFE**:
  ```bash
  npm run build:mfe2
  ```

---

## Key Implementation Details

### Data Sharing
A shared library (`shared`) provides an event bus service for communication between the MFEs. This service listens for payment events from the **Premium Payment MFE** and updates the view in the **Insurance Details MFE**.

### Web Worker
The **Premium Payment MFE** uses a web worker to simulate a long-running process for calculating premiums. This ensures the UI remains responsive during computations.

### OWASP Injection Prevention
The **Premium Payment MFE** implements input sanitization for the `policyId` field to prevent injection vulnerabilities (OWASP A03:2021).

### CSS Pre-Processing
All styles are written using **SCSS**, which provides enhanced functionality like nesting and variables.

### Local Storage
Mock policies data is stored in a JSON file and loaded into the browser’s local storage during application initialization.

---

## Development
### Watch Mode
To continuously rebuild the application during development:
```bash
npm run watch
```

### Running Tests
To run unit tests:
```bash
npm run test
```

---

## Dependencies
### Major Libraries Used:
- **Angular Material**: For UI components.
- **@angular-architects/module-federation**: For implementing microfrontends.
- **Webpack**: For bundling applications.

---

## Notes
- The application follows a modular architecture, enabling easy scalability and maintenance.
- Mock data is used to simulate real-world scenarios; integration with actual APIs can be added in the future.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.