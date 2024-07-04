# DreamStay

Welcome to DreamStay! This project aims to create a user-friendly website where users can list and browse hotels. DreamStay offers seamless features for hotel owners to manage their listings and for travelers to find their perfect stay.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **Hotel Listings**: Users can browse through various hotels listed on the platform.
- **User Authentication**: Secure login and registration for users.
- **Hotel Management**: Hotel owners can add, edit, and delete hotel information.
- **Image Management**: Hotel owners can upload, view, and delete hotel images.
- **Responsive Design**: Optimized for all devices, ensuring a seamless experience on mobile, tablet, and desktop.
- **Search Functionality**: Users can search for hotels based on various filters.

## Technologies Used

- **Frontend**: HTML, CSS, Bootstrap
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/dreamstay.git
    cd dreamstay
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up the database**:
    - **MongoDB**: Ensure MongoDB is running and update the connection details in the `config` file.

4. **Create a `.env` file** in the root directory and add your environment variables:
    ```plaintext
    PORT=3000
    CLOUDINARY_CLOUD_NAME='your cloudinary name'
    CLOUDINARY_KEY='your cloudinary key'
    CLOUDINARY_SECRET='your cloudinary secret'
    MAPBOX_TOKEN='your mapbox token'
    ```

5. **Start the server**:
    ```bash
    nodemon app.js
    ```

6. **Visit the application**:
    Open your browser and go to `http://localhost:3000`.

## Usage

1. **Register and Login**: Users can create an account and log in to the platform.
2. **Manage Hotels**: Logged-in users can add new hotel listings, update existing ones, and delete unwanted listings.
3. **Browse Hotels**: All users can browse and search for hotels based on various filters.

## Contributing

We welcome contributions to improve DreamStay! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.


## Contact

If you have any questions or suggestions, feel free to contact us at `prathamesh.lakhotiya27@gmail.com`.
