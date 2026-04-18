// Function to show the Mathematical Process Modal
function showMath() {
    // Matches the ID in your HTML
    const modal = document.getElementById('math-modal');
    const text = document.getElementById('math-text');
    
    // This displays your specific math-to-music logic
    text.innerHTML = `
        <h3>Red Onion: Arithmetic Progression</h3>
        <p><strong>Section I (Rings 1-3):</strong> Introduction using low-frequency bass tones.</p >
        <p><strong>Section II (Rings 4-6):</strong> Development with melodic synth layers.</p >
        <p><strong>Section III (Rings 7-9):</strong> Climax with high-frequency textures.</p >
    `;
    
    modal.style.display = "block";
}

// Function to close the Modal
function closeMath() {
    const modal = document.getElementById('math-modal');
    modal.style.display = "none";
}

[span_12](start_span)// Function to play/pause the sonification[span_12](end_span)
function toggleMusic(audioId) {
    const audio = document.getElementById(audioId);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
