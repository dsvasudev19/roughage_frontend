import React, { useState } from "react";
import { Field, ErrorMessage, Form, Formik } from "formik";
import * as up from "yup";
import toast, { Toaster } from "react-hot-toast";
const contactValidationSchema = up.object().shape({
  firstName: up.string().required("First Name is required"),
  lastName: up.string().required("Last Name is required"),
  phone: up.string().required("Phone is required"),
  email: up.string().email("Invalid email").required("Email is required"),
  message: up.string().required("Message is required")
});
const Contact = () => {
  const [initialValues, setInitialValues] = useState({
    firstName: "Badal",
    lastName: "Nayak",
    phone: "32323232",
    email: "badalnayak@gmail.com",
    message:"Nothing bro"
  });

  const handleSubmit = async (values, { resetForm }) => {
    const submitToast = toast.loading("Submtting Form to the Owner");
    try {
      setTimeout(() => {
        toast.success("Form submitted successfully", {
          id: submitToast,
        });
        resetForm();
      }, 1500);
    } catch (error) {
      console.loog(error);
      toast.error("Something went wrong", {
        id: submitToast,
      });
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://d2s3ptptdai04x.cloudfront.net/get-flowbite-pro.97277059-5d3d-4b76-80db-4bd7a8f10c12.css?Expires=1718536186&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMnMzcHRwdGRhaTA0eC5jbG91ZGZyb250Lm5ldC9nZXQtZmxvd2JpdGUtcHJvLjk3Mjc3MDU5LTVkM2QtNGI3Ni04MGRiLTRiZDdhOGYxMGMxMi5jc3MiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MTg1MzYxODZ9fX1dfQ__&Signature=fRxtD2OFndiesL6Zdwl6TTG0sDvcCOA0Y42XICi5CAnUHQIth7tdqTUe-EyqnZ2OfRp2H9U2ERklVTQ4foi1pGYEyQjl7UBoyRkpK4V6owWFX0PU3jZnm9lDTS25RUEt2fuUnZLDp3Gh3NNKfu~gt~zUcOdUIp7dXrSmb5jQSp0bqIsjIH2M54BVpRlfYQZ67ekxN9budC82R7KxsRzwJ2f6-Qpm8iS1yXumH1OG2ToPhyjTyeM6-cud8k8fg~KjcWWTDZeVYyI-mQVCqjeTIYGilLmrWKHLRGdEF1d97~TzR1D4BwfqiGD40G31EEeTVSPVEQkCd1-j12kprZ81xA__&Key-Pair-Id=K2J5W1U51CTOXP"
        />
      </head>
      <body style={{ height: "fit-content" }}>
        <section className="yjGyQxv8jnYk9_MGMqLN zlFmyfujKXCLCPyPEOIS">
          <div className="OQFezkmnQ31gmx3kyPTV _6AI6SY1lyVfKpv37xl0 POA0xdG25nlhxqWJyl1U pcWvkQQ8p_VQZFs_K2QA lxr73ToDk8rdp_lBYfnv w2FVb1hpekxixpXpZt_l">
            <div className="veFXkDzfJN473U3ycrV8 VxddIEjHlijsyTYSbpv0 XG_JHZii6VUFSUkjd4Kc _M8SJnIU9SEGy5Zdzx50 W8ftrBQEjPr_X07paZY_ RV8RoaI_SlEMC5CEQ3ms mDz8RC_zOGy0ceBa3JVu _F_1gdhzusC6tSOWHtx_ sfxzXnWHolluRGSsbMHw">
              <h2 className="_9OKVeTXzfSwD_NYO6_G _Bu4HL5sPDOGN_IKUsOc marR_sCaF_d1KewmkXGX P2kov_od1FPjxxII24T5 wP9HMsqy6b96l2HBRbgb">
                Contact Us
              </h2>
              <p className="Kt6mQcT6WxPJztGG1dGm XdjN1uxS_rsa3F90ox40 rZZ58B08lxezTX7iNgGT HUVIJuZ9QnvurQq0NDcX">
                We use an agile approach to test assumptions and connect with
                the needs of your audience early and often.
              </p>
            </div>
          </div>
          <div className="zMCyA7fDtJ2LsFhGTi6N veFXkDzfJN473U3ycrV8 RV8RoaI_SlEMC5CEQ3ms efbU1ITCHxyrMffHlaMS HV01LldvyEqRHHy0hljF jBU_d5xzXeL7ZFtWXmPB sfxzXnWHolluRGSsbMHw">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={contactValidationSchema}
            >
              {({ setFieldValue, errors, touched }) => (
                <Form className="i0EfZzmTLElZVOble53D _i9FbfrBNYoFTPUHnAds MSzSnYVuK0BuLFmWaksd rhHZLKCNkg6rp7jwfB1J RV8RoaI_SlEMC5CEQ3ms Kt6mQcT6WxPJztGG1dGm _chPjFVKOPRcMolL9C9r yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 pxHuWvF853ck68OLN6ef ltPMSn_g3PKyqeS8vmZk _bfBpf_irB8EXybb5xcg _cpMMPjFQqjJu4i0Puod JeVit_1klYopnNwu_8oy hAFtnIdYDiO6M_67F11P">
                  <div className="text-left">
                    <label className="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH _Rz9TooiK_4jTN_Ub8Gm">
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="first-name"
                      name="firstName"
                      className="ttxtqsLWp2pFRX8yUvWd _7ErNxHG5jDLGpANMK93 jCISvWkW5oStPH6Wrb_H MxG1ClE4KPrIvlL5_Q5x g3OYBOqwXUEW4dRGogkH jCHKuJ3G7rklx_LiAfbf _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa ltPMSn_g3PKyqeS8vmZk focus:ring-primary-500 focus:border-primary-500 _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500 JsXOfurluQ2aIoxRJf0t"
                      placeholder="Bonnie"
                      required=""
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-400"
                    />
                  </div>
                  <div className="text-left">
                    <label className="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH _Rz9TooiK_4jTN_Ub8Gm">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      id="last-name"
                      name="lastName"
                      className="ttxtqsLWp2pFRX8yUvWd _7ErNxHG5jDLGpANMK93 jCISvWkW5oStPH6Wrb_H MxG1ClE4KPrIvlL5_Q5x g3OYBOqwXUEW4dRGogkH jCHKuJ3G7rklx_LiAfbf _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa ltPMSn_g3PKyqeS8vmZk focus:ring-primary-500 focus:border-primary-500 _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500 JsXOfurluQ2aIoxRJf0t"
                      placeholder="Green"
                      required=""
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-400"
                    />
                  </div>
                  <div className="text-left">
                    <label className="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH _Rz9TooiK_4jTN_Ub8Gm">
                      Your email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="ltPMSn_g3PKyqeS8vmZk jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-500 focus:border-primary-500 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500 JsXOfurluQ2aIoxRJf0t"
                      placeholder="name@user.com"
                      required=""
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-400"
                    />
                  </div>
                  <div className="text-left">
                    <label className="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH _Rz9TooiK_4jTN_Ub8Gm">
                      Phone Number
                    </label>
                    <Field
                      type="text"
                      id="phone-number"
                      name="phone"
                      className="ttxtqsLWp2pFRX8yUvWd _7ErNxHG5jDLGpANMK93 jCISvWkW5oStPH6Wrb_H MxG1ClE4KPrIvlL5_Q5x g3OYBOqwXUEW4dRGogkH jCHKuJ3G7rklx_LiAfbf _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa ltPMSn_g3PKyqeS8vmZk focus:ring-primary-500 focus:border-primary-500 _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500 JsXOfurluQ2aIoxRJf0t"
                      placeholder="+91 989 555 9696"
                      required=""
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-400"
                    />
                  </div>
                  <div className="nqKrWSk_pMaLoiyBLZG5 text-left">
                    <label
                      for="message"
                      className="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH eCx_6PNzncAD5yo7Qcic"
                    >
                      Your message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      rows="6"
                      name="message"
                      className="ttxtqsLWp2pFRX8yUvWd _4wtDMQ2AdJOlYvml5sL jCISvWkW5oStPH6Wrb_H MxG1ClE4KPrIvlL5_Q5x g3OYBOqwXUEW4dRGogkH jCHKuJ3G7rklx_LiAfbf _Qk4_E9_iLqcHsRZZ4ge ltPMSn_g3PKyqeS8vmZk PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa focus:ring-primary-500 focus:border-primary-500 _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Leave a comment..."
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-400"
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#0891b2", // Background color
                      color: "#fff", // Text color
                      borderColor: "#0891b2", // Border color
                      height: "3.5rem", // Height
                      borderRadius: "0.75rem", // Rounded corners
                      borderWidth: "2px", // Border width
                    }}
                  >
                    Send message
                  </button>

                  {/* <button
                    type="submit"
                    className="bg-cyan-500 text-black border-2 border-slate-500 h-14 rounded-lg"
                    // className="_Masco_7wTrd3Tc0qjp9 bFARDnno0HUtfhktTXfR MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb _Qk4_E9_iLqcHsRZZ4ge bg-primary-700 DbLu21IWZ1QB3nnJtpvP hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Send message
                  </button> */}
                </Form>
              )}
            </Formik>
            <div className="y1LFsAp5zejSxGmRC4Ef _F_1gdhzusC6tSOWHtx_ _tR9_EWg_YBe3JWY5I08 H9X3EXuW0z4B30VXngca NLUM9g1CxiratTbPnE1W K6JeoaAB0AqiLUrPNn42 GHTkY6_vcDBrE7v2PrzJ">
              <div>
                <div className="kqgYncRJQ7spwKfig6It _WclR59Ji8jwfmjPtOei neyUwteEn7DOg9pBSJJE RV8RoaI_SlEMC5CEQ3ms _9OKVeTXzfSwD_NYO6_G bt0MUzUgiWUaZjB4iWGh _EiPZYgyUypIYjFtegNh _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _cpMMPjFQqjJu4i0Puod k9DXNGfIxFLC1UUEto_t o9S02llT8spzjaDWxCbO">
                  <svg
                    className="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 ErtfuPDAbVhbrEDAXyPl _dvU7XkD_gq8rV5MWJnx cmyOlpMdB9WCo6ZbMyYL jt7K__cy_iHy7aMDMaLX"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <p className="rD4HtsUG_hahmbh2Kj09 uyo8h_4Kh1IoUwm8bwJI _WfIfkoGCi0vvUrnNs4M a0Ed69aMSu0vgf4oysz0">
                  Email us:
                </p>
                <p className="cq1ij1EsUw0V2rrqeYEc K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                  Email us for general queries, including marketing and
                  partnership opportunities.
                </p>
                <a
                  href="mailto:abc@example.com"
                  className="LYMps1kO2vF8HBymW3az text-primary-600 dark:text-primary-500 _5zvlMLkN1qETxEl3IhT"
                >
                  hello@ecommerce.com
                </a>
              </div>
              <div>
                <div className="kqgYncRJQ7spwKfig6It _WclR59Ji8jwfmjPtOei neyUwteEn7DOg9pBSJJE RV8RoaI_SlEMC5CEQ3ms _9OKVeTXzfSwD_NYO6_G bt0MUzUgiWUaZjB4iWGh _EiPZYgyUypIYjFtegNh _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _cpMMPjFQqjJu4i0Puod k9DXNGfIxFLC1UUEto_t o9S02llT8spzjaDWxCbO">
                  <svg
                    className="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 ErtfuPDAbVhbrEDAXyPl _dvU7XkD_gq8rV5MWJnx cmyOlpMdB9WCo6ZbMyYL jt7K__cy_iHy7aMDMaLX"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <p className="rD4HtsUG_hahmbh2Kj09 uyo8h_4Kh1IoUwm8bwJI _WfIfkoGCi0vvUrnNs4M a0Ed69aMSu0vgf4oysz0">
                  Call us:
                </p>
                <p className="cq1ij1EsUw0V2rrqeYEc K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                  Call us to speak to a member of our team. We are always happy
                  to help.
                </p>
                <span className="LYMps1kO2vF8HBymW3az text-primary-600 dark:text-primary-500">
                  +1 (646) 786-5060
                </span>
              </div>
              <div>
                <div className="kqgYncRJQ7spwKfig6It _WclR59Ji8jwfmjPtOei neyUwteEn7DOg9pBSJJE RV8RoaI_SlEMC5CEQ3ms _9OKVeTXzfSwD_NYO6_G bt0MUzUgiWUaZjB4iWGh _EiPZYgyUypIYjFtegNh _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _cpMMPjFQqjJu4i0Puod k9DXNGfIxFLC1UUEto_t o9S02llT8spzjaDWxCbO">
                  <svg
                    className="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 ErtfuPDAbVhbrEDAXyPl _dvU7XkD_gq8rV5MWJnx cmyOlpMdB9WCo6ZbMyYL jt7K__cy_iHy7aMDMaLX"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="rD4HtsUG_hahmbh2Kj09 uyo8h_4Kh1IoUwm8bwJI _WfIfkoGCi0vvUrnNs4M a0Ed69aMSu0vgf4oysz0">
                  Support
                </p>
                <p className="cq1ij1EsUw0V2rrqeYEc K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                  Email us for general queries, including marketing and
                  partnership opportunities.
                </p>
                <a
                  href="#"
                  className="ay0ziTPUL4Ag5d1DkSY7 zhRMeqbg7JsftloqW_W6 veFXkDzfJN473U3ycrV8 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 text-primary-600 border-primary-600 _lvH1U9a1qR55wvLD2NC hover:bg-primary-600 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:border-primary-500 dark:text-primary-500 DTyjKhtXBNaebZa5L0l9 dark:hover:bg-primary-600 dark:focus:ring-primary-800"
                >
                  Support center
                </a>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default Contact;
