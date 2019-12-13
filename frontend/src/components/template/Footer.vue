<template>
    <footer class="footer">
        <span>Copyright
            <a href="https://www.udemy.com/course/curso-web/" target="_blank">
            Cod3r</a> © 2019 | Logo Designed by 
            <a href="https://www.freepik.com/maestro99/" target="_blank">
            Maestro99</a>/Freepik | <a href="https://github.com/patriciafelixx" target="_blank">
            <img src="@/assets/github.png" width="15" /> patriciafelixx</a></span>            
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #ddd;
        color: #333;
        font-size: 0.9rem;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 40px;
    }

    .footer a {
        color: #555;
        font-weight: bold;
    }

    .footer a:hover {
        color: #999;
        text-decoration: none;
    }
</style>