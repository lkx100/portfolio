function toggleSection(id) {
    $('#' + id).collapse('toggle');
}

document.addEventListener('DOMContentLoaded', function() {
    const text = "A Full-Stack Dev who is curious to Explore & Learn Tech";
    let index = 0;

    function type() {
        if (index < text.length) {
            document.getElementById('typing-text').innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 80); // Adjust typing speed here
        }
    }

    type();
});