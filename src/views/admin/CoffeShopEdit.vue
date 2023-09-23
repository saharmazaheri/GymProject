<template class="container-fluid">
  <CRow dir="rtl">
    <CCol>
      <CCard class="mb-4">
        <CCardHeader class="h-item">
          <small>افزودن، ویرایش و حذف</small> <strong>محصولات</strong>
        </CCardHeader>
        <CCardBody class="b-item">
          <CAccordion always-open>
            <CAccordionItem :item-key="1">
              <CAccordionHeader> نمایش منو </CAccordionHeader>
              <CAccordionBody>
                <CTable>
                  <CTableHead color="secondary">
                    <tr class="cart_menu">
                      <td>تصویر</td>
                      <td>نام</td>
                      <td>توضیحات</td>
                      <td>قیمت</td>
                      <td>حذف محصول</td>
                      <td>ویرایش محصول</td>
                    </tr>
                  </CTableHead>
                  <br />
                  <CTableBody>
                    <tr v-for="item in coffee" :key="item.id">
                      <td class="cart_product">
                        <img :src="item.imge" width="60" height="60" alt="" />
                      </td>
                      <td class="cart_description">
                        <p>
                          {{ item.title }}
                        </p>
                      </td>
                      <td class="cart_price">
                        <p>{{ item.comments }}</p>
                      </td>
                      <td class="cart_quantity">
                        <p>{{ item.price }}</p>
                      </td>
                      <td style="color: #fff">
                        <CButton
                          style="background-color: rgb(208, 64, 64)"
                          @click="deleteinformation(item.id)"
                          >حذف</CButton
                        >
                      </td>
                      <td style="color: #fff">
                        <CButton
                          style="background-color: rgb(38, 220, 47)"
                          @click="
                            () => {
                              ;(visibleVerticallyCenteredDemo = true),
                                receivingInformation(item.id)
                            }
                          "
                          >ویرایش</CButton
                        >
                      </td>
                    </tr>
                    <CModal
                      alignment="center"
                      :visible="visibleVerticallyCenteredDemo"
                      @close="
                        () => {
                          visibleVerticallyCenteredDemo = false
                        }
                      "
                    >
                      <CModalBody>
                        <div style="display: block">
                          <div class="col-12 mb-4">
                            <h4 class="title">ویرایش محصول</h4>
                            <hr />
                          </div>
                          <div class="d-item1">
                            <span class="var"> تصویر : </span>
                            <img class="im" :src="info[0]" />
                            <CFormInput
                              class="i-label1"
                              style="width: 250px"
                              type="file"
                              accept="image/*"
                            />
                          </div>
                          <div class="d-item1">
                            <span class="var"> نام محصول : </span>
                            <span class="val"> {{ info[1] }} </span>
                          </div>
                          <div class="d-item1">
                            <span class="var"> توضیحات : </span>
                            <span class="val"> {{ info[2] }} </span>
                          </div>
                          <div class="d-item1">
                            <span class="var"> قیمت : </span>
                            <span class="val"> {{ info[3] }} تومان </span>
                          </div>
                        </div>
                      </CModalBody>
                      <CModalFooter>
                        <CButton
                          color="secondary"
                          @click="
                            () => {
                              ;(visibleVerticallyCenteredDemo = false),
                                clearinfo()
                            }
                          "
                        >
                          بستن
                        </CButton>
                        <CButton color="primary" @click="Record1()"
                          >دخیره اطلاعات</CButton
                        >
                      </CModalFooter>
                    </CModal>
                  </CTableBody>
                </CTable>
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem :item-key="2">
              <CAccordionHeader> افزودن محصول جدید </CAccordionHeader>
              <CAccordionBody>
                <div>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="نام"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="توضیحات"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="قیمت"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="mb-3">
                      <CFormLabel for="formFile">انتخاب تصویر</CFormLabel>
                      <CFormInput
                        class="i-label"
                        style="width: 300px"
                        type="file"
                        accept="image/*"
                      />
                    </div>
                  </CRow>
                  <div class="text-left">
                    <CButton class="button Bitem1" @click="Record2()"
                      >ثبت محصول</CButton
                    >
                  </div>
                </div>
              </CAccordionBody>
            </CAccordionItem>
          </CAccordion>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'CoffeShopEdit',
  data() {
    return {
      visibleVerticallyCenteredDemo: false,
      info: [],
    }
  },
  computed: {
    coffee() {
      return this.$store.getters.GetCoffee
    },
  },
  methods: {
    receivingInformation(Lid) {
      this.info.push(
        this.coffee[Lid].imge,
        this.coffee[Lid].title,
        this.coffee[Lid].comments,
        this.coffee[Lid].price,
      )
    },
    deleteinformation(Lid) {
      this.coffee.splice(Lid, 1)
    },
    clearinfo() {
      this.info.splice(0)
    },
    Record1() {
      alert('اطلاعات با موفقیت ویرایش شد')
    },
    Record2() {
      alert('محصول جدید با موفقیت ثبت گردید')
    },
  },
}
</script>
