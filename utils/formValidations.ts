export const noSpecialCharacters = (value: string) => !value.match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u) ? 'No special characters or numbers.' : '';

export const maxLength = (value: string, max: number) => value.length > max ? `Max ${max} characters.` : '';

export const invalidEmail = (value: string) => !value.match(/^[A-Z\d._%+-]+[^.@]@[a-z\d-]{1,61}(?:\.[a-z\d-]{1,61})*(?:\.[a-z]{2,})+$/i) ? 'Invalid email address.' : '';
