export default function tokenDecode(token) {
    
    token = localStorage.getItem('tokenuserup').split('.')[1];

    return JSON.parse(window.atob(token));

}