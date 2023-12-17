import React from "react";

export function AppConverter() {
    return(
        <section className="section-converter">
            <h1 className="section-converter__h1">Conversor de PX a REM</h1>
            <div className="app">
                <div className="app__contents">
                    <label className="app__contents">
                        <input type="text" className="app__contents--input" />
                    </label>
                    <label  className="app__contents">
                        <input type="text" className="app__contents--input" />
                    </label>
                </div>  
                <p className="app_p">Cálculo basado en un root font-size de 16 píxeles..</p>
            </div>
        </section>
    )
}