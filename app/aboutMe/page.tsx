import React from 'react';
import {Box, Typography} from "@/lib/mui";
import './aboutMe.css'

const AboutMe = () => {
    return (
            <Box sx={{
                width: '100%',
                maxWidth: '1366px',
                mx: 'auto',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 1,
                color: 'white',
                px: '1rem',
                height: {xs: '100%', md: '100vh'},
                display: {xs: 'block', md: 'flex'}
            }}>
                <Box sx={{width: {xs: '100%', md: '40%'}, pr: {xs: 0, md: 4}, pt: 4}}>
                    <Typography variant='h4'>I'm Daylon Perez...</Typography>
                    <Typography sx={{mt: 2, mb: 3}} align='justify'>
                        Tengo un marcado interés por los temas de la condición humana y el
                        autoconocimiento, por lo que siento la necesidad de trabajar esos asuntos en mis
                        prácticas artísticas.
                        Propongo revelar de forma gráfica un sentimiento o situación en la que nos podamos
                        encontrar, algo que vaya más allá de una mirada o expresión, algo más difícil de
                        captar, como el temor al vacío o la anatomía del miedo, sin dejar que los estereotipos
                        implantados por nosotros mismos influyan en lo que vemos.
                        Siempre he trabajado con personajes ya que me permiten algo de flexibilidad a la
                        hora de desarrollar mi proceso creativo, de esta manera alcanzo un mayor
                        dramatismo en mis composiciones.
                        Todo surge de la necesidad de expresar mis temores e inseguridades. En los
                        momentos más difíciles lo utilizo con fines terapéuticos, algo así como una válvula
                        de escape, liberándome por completo de toda esa carga de pensamientos.
                    </Typography>
                </Box>
                <Box sx={{width: {xs: '100%', md: '60%'}, overflow: 'hidden'}}>
                    <img src="/daylon.webp"
                         alt="daylon-image"
                         className='about-me-image'
                    />
                </Box>
            </Box>
    );
};

export default AboutMe;
