function showMath(ingredient) {
    const modal = document.getElementById('math-modal');
    const text = document.getElementById('math-text');
    let content = "";

    if (ingredient === 'onion') {
        content = `
            <h3>1. Geometric Regression (Red Onion)</h3>
            <p>I mapped the concentric circles of the onion using non-linear regression in Desmos to trace its physical layers.</p>
            <div class="regression-image-container">
                <img src="red-onion-function.jpg" style="width:100%; border-radius:2px;">
            </div>
            <h3>2. Mathematical Modeling</h3>
            <div class="formula-box">$$r_{n} = r_{1} + (n-1)d$$</div>
            <p>The 9 rings follow an <strong>Arithmetic Progression</strong> with a common difference of $d \\approx 2.17$.</p>
            <h3>3. Audio Composition Strategy</h3>
            <p>The 9 layers are quantized into a 3-movement structure using additive synthesis: Bass (Rings 1-3), Melodic Synth (Rings 4-6), and Found-sound Percussion (Rings 7-9).</p>
        `;
    } 
    else if (ingredient === 'starfruit') {
        content = `
            <h3>1. Polar Symmetry (Star Fruit)</h3>
            <p>The star fruit exhibits beautiful 5-fold <strong>Dihedral Symmetry (D5)</strong>, which cannot be modeled by simple circles.</p>
            <div class="regression-image-container">
                <img src="starfruit-function.jpg" style="width:100%; border-radius:2px;">
            </div>
            <h3>2. Mathematical Modeling</h3>
            <div class="formula-box">$$r(\\theta) = R_{avg} \\cdot (1 + A \\cos(5\\theta))$$</div>
            <p>Using a polar periodic equation, the 5 peaks in the radius directly represent the 5 sharp ribs of the fruit.</p>
            <h3>3. Audio Composition Strategy</h3>
            <p>The 5-fold architecture translates directly into a rhythmic <strong>5/4 time signature</strong> and a 5-note <strong>Pentatonic Scale</strong>, utilizing sharp pluck synths to match its ridges.</p>
        `;
    } 
    else if (ingredient === 'avocado') {
        content = `
            <h3>1. Asymmetric Ovoid Regression (Avocado)</h3>
            <p>An avocado slice presents an asymmetric egg-shape (ovoid) paired with a perfectly circular concentric seed core.</p>
            <div class="regression-image-container">
                <img src="avocado-function.jpg" style="width:100%; border-radius:2px;">
            </div>
            <h3>2. Mathematical Modeling</h3>
            <div class="formula-box">$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2(1 + kx)} = 1$$</div>
            <p>I utilized a modified elliptical regression (wobble/ovoid equation) to account for the tapering top of the fruit layout.</p>
            <h3>3. Audio Composition Strategy</h3>
            <p>The smooth, thick green flesh is translated into warm, low-pass filtered sub-bass pads, while the seed represents a steady, grounded structural tone.</p>
        `;
    } 
    else if (ingredient === 'romanesco') {
        content = `
            <h3>1. Self-Similar Fractals (Romanesco Broccoli)</h3>
            <p>Romanesco is a textbook example of a natural <strong>fractal</strong>, where each bud is composed of a series of smaller buds.</p>
            <div class="regression-image-container">
                <img src="romanesco-function.jpg" style="width:100%; border-radius:2px;">
            </div>
            <h3>2. Mathematical Modeling</h3>
            <div class="formula-box">$$z_{n+1} = z_{n}^2 + c \\quad \\text{or} \\quad F_{n} = F_{n-1} + F_{n-2}$$</div>
            <p>The spirals follow the <strong>Fibonacci Sequence</strong> and log-spiral geometry, scaling down infinitely by a constant ratio.</p>
            <h3>3. Audio Composition Strategy</h3>
            <p>To sonify infinite self-similarity, I used a **Polyphony** (an auditory illusion of a sound that infinitely cascades downward) combined with generative arpeggios structured around Fibonacci numbers.</p>
        `;
    }

    text.innerHTML = content;
    modal.style.display = "block";

    if (window.MathJax) {
        MathJax.typeset();
    }
}

function closeMath() {
    document.getElementById('math-modal').style.display = "none";
}

function toggleMusic(audioId) {
    const audio = document.getElementById(audioId);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}