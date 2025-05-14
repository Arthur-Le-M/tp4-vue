<template>
    <div class="base-footer">
        <footer>
            <p>&copy; 2023 Your Company Name. All rights reserved.</p>
            <nav>
            <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
            </nav>
        </footer>
    </div>
</template>


<script>
export default {
    name: "BaseFooter",
    components: {},
};
</script>

<style scoped lang="css">

.base-footer {
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
}

.base-footer footer {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.base-footer nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

.base-footer nav ul li {
    margin: 0 15px;
}

</style>
