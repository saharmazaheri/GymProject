<template class="container-fluid">
  <CRow dir="rtl">
    <CCol>
      <CCard class="mb-4">
        <CCardHeader class="h-item">
          <small>افزودن، ویرایش و حذف</small> <strong>دوره‌ها</strong>
        </CCardHeader>
        <CCardBody class="b-item">
          <CAccordion always-open>
            <CAccordionItem :item-key="1">
              <CAccordionHeader> نمایش دوره‌ها </CAccordionHeader>
              <CAccordionBody>
                <CTable>
                  <CTableHead color="secondary">
                    <tr class="cart_menu">
                      <td>نوع دوره</td>
                      <td>تعداد جلسات</td>
                      <td>قیمت</td>
                      <td>ظرفیت باقیمانده</td>
                      <td>حذف دوره</td>
                      <td>ویرایش دوره</td>
                    </tr>
                  </CTableHead>
                  <br />
                  <CTableBody>
                    <tr v-for="item in courses" :key="item.id">
                      <td class="cart_description">
                        <p>
                          {{ item.type }}
                        </p>
                      </td>
                      <td class="cart_price">
                        <p>{{ item.numberOfSessions }}</p>
                      </td>
                      <td class="cart_quantity">
                        <p>{{ item.price }}</p>
                      </td>
                      <td class="cart_quantity">
                        <p>{{ item.Capacity }} نفر</p>
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
                            <h4 class="title">ویرایش دوره</h4>
                            <hr />
                          </div>
                          <div class="d-item1">
                            <span class="var"> نوع دوره : </span>
                            <span class="val"> {{ info[0] }} </span>
                          </div>
                          <div class="d-item1">
                            <span class="var"> تعداد جلسات : </span>
                            <span class="val"> {{ info[1] }} </span>
                          </div>
                          <div class="d-item1">
                            <span class="var"> قیمت : </span>
                            <span class="val"> {{ info[2] }} </span>
                          </div>
                          <div class="d-item1">
                            <span class="var"> ظرفیت باقیمانده : </span>
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
              <CAccordionHeader> افزودن دوره جدید </CAccordionHeader>
              <CAccordionBody>
                <div class="a-form">
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
                        placeholder="تعداد جلسات"
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
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="ظرفیت باقیمانده"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="text-left">
                      <CButton class="button Bitem1" @click="Record2()"
                        >ثبت دوره</CButton
                      >
                    </div>
                  </CRow>
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
  name: 'CoursesEdit',
  data() {
    return {
      visibleVerticallyCenteredDemo: false,
      info: [],
    }
  },
  computed: {
    courses() {
      return this.$store.getters.GetCourses
    },
  },
  methods: {
    receivingInformation(Lid) {
      this.info.push(
        this.courses[Lid].type,
        this.courses[Lid].numberOfSessions,
        this.courses[Lid].price,
        this.courses[Lid].Capacity,
      )
    },
    deleteinformation(Lid) {
      this.courses.splice(Lid, 1)
    },
    clearinfo() {
      this.info.splice(0)
    },
    Record1() {
      alert('اطلاعات با موفقیت ویرایش شد')
    },
    Record2() {
      alert('دوره جدید با موفقیت ثبت گردید')
    },
  },
}
</script>
