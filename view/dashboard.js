const Dashboard = {
    render: () => {
        return `
        <main class="main-wrapper">
        <div class="image-background">
            <img class="image-background__top" src="./images/bg.jpg" alt="background images">
        </div>
       
        <div class="wrapper-open-signin">
            Go to home?
            <br>
            <a class="link-on-signin" href="#" data-name="/">Home</a>
        </div>
    </main>
        `
    }
}

export default Dashboard;
