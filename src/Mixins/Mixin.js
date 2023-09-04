import { useVuelidate } from '@vuelidate/core'
import {
  required,
  maxLength,
  email,
  minLength,
  sameAs,
} from '@vuelidate/validators'

export const Mixin = {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      Name: '',
      Family: '',
      NationalCode: '',
      Dateofbirth: '',
      UserAddress: '',
      PhoneNumber: '',
      Email: '',
      Password: '',
      RePassword: '',
      Educational: '',
      selectEducational: '',
      cardnumber: '',
      cvv2: '',
      month: '',
      year: '',
      securitycode: '',
      Passwordcard: '',
    }
  },
  methods: {
    RegisterUser() {
      alert('ثبت نام با موفقیت انجام شد')
    },
    LoginUser() {
      this.$router.replace('/user-panel')
    },
    Resume1() {
      alert('اطلاعات با موفقیت ثبت شد')
    },
  },
  validations: {
    Name: { required },
    Family: { required },
    NationalCode: { required, minLength: minLength(10) },
    Dateofbirth: { required },
    UserAddress: { required },
    PhoneNumber: {
      minLength: minLength(8),
      maxLength: maxLength(11),
      required,
    },
    Email: { required, email, maxLength: maxLength(100) },
    Password: { minLength: minLength(6), required },
    RePassword: { sameAs: sameAs('Password'), required },
    Educational: { required },
    selectEducational: { required },
    cardnumber: { required },
    cvv2: { required },
    month: { required },
    year: { required },
    securitycode: { required },
    Passwordcard: { required },
  },
}
