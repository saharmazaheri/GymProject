<template class="container-fluid">
  <CRow dir="rtl">
    <CCol>
      <CCard class="mb-4">
        <CCardHeader class="h-item">
          <small>افزودن، ویرایش و حذف</small> <strong>مربیان</strong>
        </CCardHeader>
        <CCardBody class="b-item">
          <CAccordion always-open>
            <CAccordionItem :item-key="1">
              <CAccordionHeader> نمایش مربی‌ها </CAccordionHeader>
              <CAccordionBody>
                <CTable>
                  <CTableHead color="secondary">
                    <tr class="cart_menu">
                      <td>تصویر</td>
                      <td>نام مربی</td>
                      <td>نوع دوره</td>
                      <td>رشته</td>
                      <td>حذف مربی</td>
                      <td>ویرایش مربی</td>
                    </tr>
                  </CTableHead>
                  <br />
                  <CTableBody>
                    <tr v-for="item in trainers" :key="item.id">
                      <td class="cart_product">
                        <img :src="item.imge" width="60" height="60" alt="" />
                      </td>
                      <td class="cart_description">
                        <p>
                          {{ item.NameFamily }}
                        </p>
                      </td>
                      <td class="cart_price">
                        <p>{{ item.type }}</p>
                      </td>
                      <td class="cart_quantity">
                        <p>{{ item.field }}</p>
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
                            <h4 class="title">ویرایش مربی</h4>
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
                            <span class="var"> نام مربی : </span>
                            <span class="val"> {{ info[1] }} </span>
                          </div>
                          <div class="d-item1">
                            <span class="var"> نوع دوره : </span>
                            <span class="val"> {{ info[2] }} </span>
                          </div>
                          <div class="d-item1">
                            <span class="var"> رشته : </span>
                            <span class="val"> {{ info[3] }} </span>
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
              <CAccordionHeader> افزودن مربی جدید </CAccordionHeader>
              <CAccordionBody>
                <div class="a-form">
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
                        placeholder="نام خانوادگی"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="کد ملی"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="تاریخ تولد"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="شماره تماس"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="رشته تحصیلی"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="نوع دوره"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="میزان تحصیلات"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="آدرس ایمیل"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="آدرس محل زندگی"
                      />
                    </div>
                  </CRow>
                </div>
                <div style="padding-right: 9px">
                  <CRow class="mb-3">
                    <div class="mb-3">
                      <CFormLabel for="formFile">انتخاب تصویر</CFormLabel>
                      <CFormInput
                        class="i-label"
                        style="width: 300px"
                        type="file"
                      />
                    </div>
                  </CRow>
                  <div class="text-left">
                    <CButton class="button Bitem" @click="Record2()"
                      >ثبت مربی</CButton
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
  name: 'TrainerEdit',
  data() {
    return {
      visibleVerticallyCenteredDemo: false,
      info: [],
    }
  },
  computed: {
    trainers() {
      return this.$store.getters.GetTrainers
    },
  },
  methods: {
    receivingInformation(Lid) {
      this.info.push(
        this.trainers[Lid].imge,
        this.trainers[Lid].NameFamily,
        this.trainers[Lid].type,
        this.trainers[Lid].field,
      )
    },
    deleteinformation(Lid) {
      this.trainers.splice(Lid, 1)
    },
    clearinfo() {
      this.info.splice(0)
    },
    Record1() {
      alert('اطلاعات با موفقیت ویرایش شد')
    },
    Record2() {
      alert('مربی جدید با موفقیت ثبت گردید')
    },
  },
}
</script>
