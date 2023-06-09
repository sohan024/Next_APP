const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="../logo/logo.png" alt="Logo" />
            </div>
            <div className="title">
                <p>Hatil</p>
            </div>
            <div className="signin-button">
                <button>Sign In</button>
            </div>

            <style jsx>
                {`
                    nav {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 1rem;
                        background-color: #f5f5f5;
                    }

                    .logo img {
                        height: 40px;
                    }

                    .title {
                        flex-grow: 1;
                        text-align: center;
                        font-size: 1.2rem;
                        font-weight: bold;
                    }

                    .signin-button button {
                        background-color: orange;
                        color: white;
                        padding: 0.5rem 1rem;
                        border: none;
                        border-radius: 4px;
                        font-size: 1rem;
                        cursor: pointer;
                    }
                `}
            </style>

        </nav>
    );
};

export default Navbar;
