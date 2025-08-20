const renderLoginForm = () => {
    const container = document.getElementById('main-container')
        container.innerHTML = `
          <div class="login-wrapper">
            <div class="login-container">
                <h2 class="login-title">Welcome Back</h2>
                <form id="login_form" class="login-form">
                    <div class="input-group">
                        <input 
                            id="identifier" 
                            type="text" 
                            placeholder="Enter your email or username..." 
                            required
                            class="form-input"
                        >
                    </div>
                    <div class="input-group">
                        <input 
                            id="password" 
                            type="password" 
                            placeholder="Enter your password" 
                            required
                            class="form-input"
                        >
                    </div>
                    <button type="submit" class="submit-btn">Sign In</button>
                </form>
            </div>
        </div>
    `;

}