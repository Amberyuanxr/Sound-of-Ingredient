/**
 * SONIFICATION LOGIC: RED ONION
 * This script handles the interactive components of the Musical Pantry project.
 * It bridges geometric regression data with audio composition strategy.
 */

// Function to display the Mathematical and Compositional Process
function showMath() {
    const modal = document.getElementById('math-modal');
    const text = document.getElementById('math-text');
    
    /**
     * CONTENT SYNTHESIS:
     * 1. [span_2](start_span)[span_3](start_span)Geometric Regression: Proves data-driven origin using Desmos[span_2](end_span)[span_3](end_span).
     * 2. [span_4](start_span)Mathematical Modeling: Establishes the Arithmetic Progression (AP)[span_4](end_span).
     * 3. [span_5](start_span)Audio Strategy: Explains the 'Math-to-Music' translation[span_5](end_span).
     */
    text.innerHTML = `
        <div class="math-explanation">
            <h3>1. Geometric Regression (Desmos Analysis)</h3>
            [span_6](start_span)<p>To establish a data-driven foundation, I performed photographic analysis on a Red Onion cross-section[span_6](end_span). [span_7](start_span)Using non-linear regression in Desmos, I mapped the boundary of the onion to determine its physical scale[span_7](end_span).</p >
            
            <div class="regression-image-container">
                < img src="red-onion-function.jpg" alt="Desmos Regression Analysis" style="width:100%; border-radius:4px;">
                <p style="font-size: 0.8rem; font-style: italic; margin-top: 5px;">
                    <strong>Regression Model:</strong> $(y_1 - b)^2 \\sim r - (x_1 - a)^2$ | [span_8](start_span)<strong>Max Radius (r):</strong> $\\approx 19.47$[span_8](end_span).
                </p >
            </div>

            <h3>2. Mathematical Modeling</h3>
            [span_9](start_span)<p>The growth pattern of the onion's concentric rings follows an <strong>Arithmetic Progression (AP)</strong>[span_9](end_span):</p >
            <div class="formula-box">
                $$r_{n} = r_{1} + (n-1)d$$
            </div>
            [span_10](start_span)<p>Based on the 9 identified physical rings, the common difference (average width) is established as $d \\approx 2.17$[span_10](end_span).</p >

            <h3>3. Audio Composition Strategy</h3>
            [span_11](start_span)<p>Using <strong>additive synthesis</strong>, the mathematical parameters dictate the musical arrangement[span_11](end_span). [span_12](start_span)The 9 rings are quantized into three distinct movements[span_12](end_span):</p >
            <ul class="arrangement-list">
                [span_13](start_span)<li><strong>Movement I (Rings 1-3):</strong> Dense core represented by low-frequency cutting onions sound[span_13](end_span).</li>
                [span_14](start_span)<li><strong>Movement II (Rings 4-6):</strong> Development phase using melodic synth layers that increase in brightness as the radius ($r_{n}$) grows[span_14](end_span).</li>
                [span_15](start_span)<li><strong>Movement III (Rings 7-9):</strong> Climax featuring high-frequency textures and a higher ocatave in main melody[span_15](end_span).</li>
            </ul>
        </div>
    `;
    
    // Display the modal
    modal.style.display = "block";

    // Trigger MathJax to render the LaTeX formulas into textbook-quality typography
    if (window.MathJax) {
        MathJax.typeset();
    }
}

// Function to close the Modal
function closeMath() {
    const modal = document.getElementById('math-modal');
    modal.style.display = "none";
}

/**
 * AUDIO CONTROL LOGIC
 * Toggles the sonification track based on the element ID.
 */
function toggleMusic(audioId) {
    const audio = document.getElementById(audioId);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
