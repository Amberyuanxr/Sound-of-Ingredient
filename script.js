// Function to show the Mathematical Process Modal
function showMath() {
    const modal = document.getElementById('math-modal');
    const text = document.getElementById('math-text');
    
    // This content bridges your analytical research with your creative output
    text.innerHTML = `
        <div class="math-explanation">
            <h3>1. Geometric Regression (Desmos)</h3>
            [span_0](start_span)<p>I performed photographic analysis on a Red Onion cross-section to identify its physical rings[span_0](end_span). Using Desmos, I performed a non-linear regression to map the boundary of the onion.</p >
            
            <div class="regression-image-container">
                < img src="red-onion-function.jpg" alt="Desmos Regression" style="width:100%; border-radius:4px;">
                <p style="font-size: 0.8rem; font-style: italic; margin-top: 5px;">
                    Model: $(y_1 - b)^2 \sim r - (x_1 - a)^2$ | [span_1](start_span)Max Radius $(r) \approx 19.47$[span_1](end_span).
                </p >
            </div>

            <h3>2. Mathematical Modeling</h3>
            <p>The onion's concentric circles follow an <strong>Arithmetic Progression</strong>:</p >
            <div class="formula-box">
                $r_{n} = r_{1} + (n-1)d$
            </div>
            [span_2](start_span)<p>The average width between the 9 identified physical rings established a common difference of $d \approx 2.17$[span_2](end_span).</p >

            <h3>3. Audio Composition Strategy</h3>
            <p>Utilizing <strong>additive synthesis</strong>, the 9 rings are quantized into three musical movements:</p >
            <ul class="arrangement-list">
                [span_3](start_span)<li><strong>Section I (Rings 1-3):</strong> Low-frequency bass tones representing the dense core[span_3](end_span).</li>
                [span_4](start_span)<li><strong>Section II (Rings 4-6):</strong> Melodic synth layers increasing in volume/brightness as the radius grows[span_4](end_span).</li>
                [span_5](start_span)<li><strong>Section III (Rings 7-9):</strong> High-frequency textures and percussive "found sounds" (chopping/sizzling)[span_5](end_span).</li>
            </ul>
        </div>
    `;
    
    modal.style.display = "block";

    // This ensures the math formulas look like textbook equations
    if (window.MathJax) {
        MathJax.typeset();
    }
}
