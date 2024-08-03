import { useFormik } from 'formik'; // Form yönetimi için Formik kütüphanesini içe aktarır
import { RegisterFormSchemas } from '../schemas/RegisterFormSchemas'; // Form doğrulama şemalarını içe aktarır

function RegisterForm() {
    // Formik'in useFormik hook'u ile formun durumunu ve işlevlerini alır
    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '', // Formun başlangıç email değeri
            age: '', // Formun başlangıç yaş değeri
            password: '', // Formun başlangıç şifre değeri
            confirmPassword: '', // Formun başlangıç şifre tekrarı değeri
            term: false // Kullanıcı sözleşmesini kabul edip etmediğini belirten başlangıç değeri
        },
        validationSchema: RegisterFormSchemas, // Form doğrulama kurallarını içerir
        onSubmit: (values) => {
            console.log('Form values:', values); // Form gönderildiğinde değerleri konsola yazdırır
        }
    });

    return (
        <div className="App">
            <form onSubmit={handleSubmit}> {/* Formun gönderim işlevi */}
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email Giriniz"
                        value={values.email}
                        onChange={handleChange} // Formik'in handleChange işlevi
                    />
                    {errors.email && touched.email && <div className="error">{errors.email}</div>} {/* Email alanı hatasını gösterir */}
                </div>

                <div>
                    <label htmlFor="age">Yaş</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        placeholder="Yaşinizi Giriniz"
                        value={values.age}
                        onChange={handleChange} // Formik'in handleChange işlevi
                    />
                    {errors.age && touched.age && <div className="error">{errors.age}</div>} {/* Yaş alanı hatasını gösterir */}
                </div>

                <div>
                    <label htmlFor="password">Şifre</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Şifrenizi Giriniz"
                        value={values.password}
                        onChange={handleChange} // Formik'in handleChange işlevi
                    />
                    {errors.password && touched.password && <div className="error">{errors.password}</div>} {/* Şifre alanı hatasını gösterir */}
                </div>

                <div>
                    <label htmlFor="confirmPassword">Şifre Tekrari</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Şifrenizi Tekrar Giriniz"
                        value={values.confirmPassword}
                        onChange={handleChange} // Formik'in handleChange işlevi
                    />
                    {errors.confirmPassword && touched.confirmPassword && <div className="error">{errors.confirmPassword}</div>} {/* Şifre tekrarı alanı hatasını gösterir */}
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="term"
                        name="term"
                        checked={values.term}
                        onChange={handleChange} // Formik'in handleChange işlevi
                    />
                    <label htmlFor="term">Kullanici Sözleşmesini Kabul Ediyorum</label>
                    {errors.term && touched.term && <div className="error">{errors.term}</div>} {/* Kullanıcı sözleşmesi alanı hatasını gösterir */}
                </div>

                <button type="submit">Kaydol</button> {/* Formu gönderir */}
            </form>
        </div>
    );
}

export default RegisterForm;
