import * as yup from 'yup';

// Yup doğrulama şeması oluşturur
export const RegisterFormSchemas = yup.object().shape({
    email: yup
        .string() // Email alanının bir string olduğunu belirtir
        .email('Geçerli bir e-posta adresi giriniz') // Geçerli bir e-posta adresi olmalıdır
        .required('E-posta gereklidir'), // Bu alan zorunludur
    age: yup
        .number() // Yaş alanının bir sayı olduğunu belirtir
        .required('Yaş gereklidir') // Bu alan zorunludur
        .positive('Yaş pozitif bir sayi olmalidir') // Pozitif bir sayı olmalıdır
        .integer('Yaş tam sayi olmalidir'), // Tam sayı olmalıdır
    password: yup
        .string() // Şifre alanının bir string olduğunu belirtir
        .required('Şifre gereklidir') // Bu alan zorunludur
        .min(8, 'Şifre en az 8 karakter uzunluğunda olmalidir'), // Minimum 8 karakter olmalıdır
    confirmPassword: yup
        .string() // Şifre tekrarı alanının bir string olduğunu belirtir
        .required('Şifre tekrari gereklidir') // Bu alan zorunludur
        .oneOf([yup.ref('password'), null], 'Şifreler eşleşmiyor'), // Şifreler aynı olmalıdır
    term: yup
        .boolean() // Kullanıcı sözleşmesi kabulünün bir boolean olduğunu belirtir
        .oneOf([true], 'Kullanici sözleşmesini kabul etmelisiniz') // Bu alan true olmalıdır
});
