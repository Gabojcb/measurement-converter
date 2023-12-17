import React from "react";

export function AppConverter() {
    const [pixelValue, setPixelValue] = React.useState(10);
    const [valueRem, setValueRem] = React.useState(pixelValue / 16);

    function extractNumbers(value: string) : string {

        let arrValues = value.split('');
        let letters : string[] = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
          ];
        let notLetters = arrValues.filter(element => !letters.includes(element));
        return notLetters.join('');
    }

    const handleChanges = (event) => {
        const { value } = event.target;
        setPixelValue(value); 
        let valueNumber = extractNumbers(value);
        setValueRem(valueNumber / 16);
    };

    return (
        <section className="section-converter">
            <h1 className="section-converter__h1">Conversor de PX a REM</h1>
            <div className="app">
                <div className="app__contents">
                    <label className="app-label">
                        Píxeles
                        <input type="text" className="app__contents--input" value={pixelValue} onChange={handleChanges} />
                        <span className="measure">px</span>
                    </label>
                    <label className="app-label">
                        REM
                        <input type="text" className="app__contents--input" value={valueRem} readOnly />
                        <span className="measure">rem</span>
                    </label>
                </div>
                <p className="app_p">Cálculo basado en un root font-size de 16 píxeles.</p>
            </div>
        </section>
    );
}
