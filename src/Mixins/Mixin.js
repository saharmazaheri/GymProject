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
    }
  },
  methods: {
    RegisterUser() {
      const register = {
        Name: this.Name,
        Family: this.Family,
        NationalCode: this.NationalCode,
        Dateofbirth: this.Dateofbirth,
        UserAddress: this.UserAddress,
        PhoneNumber: this.PhoneNumber,
        Email: this.Email,
        Password: this.Password,
        RePassword: this.RePassword,
        Educational: this.Educational,
        selectEducational: this.selectEducational,
      }
      this.$router.dispatch('RegisterUser', register)
    },
    LoginUser() {
      this.$router.replace('/')
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
    RePassword: { sameAs: sameAs('Password') },
    Educational: { required },
    selectEducational: { required },
  },
}
