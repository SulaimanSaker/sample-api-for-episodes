export const registerPhase = {
  TRACK_YOUR_CYCLE: 0,
  PLAN_YOUR_PREGNANCY: 1,
  TRACK_YOUR_PREGNANCY: 2,
  KEEP_UP_WITH_MY_KIDS: 3,
};

export const registerView = {
  DESCRIBE_YOUR_NEEDS: "describe-your-needs",
  REGISTER_CYCLE_FORM: "register-cycle-form",
  REGISTER_YOUR_KID_FORM: "register-your-kid-form",
  REGISTER_DUE_DATE_FORM: "register-due-date-form",
  REGISTER_INFO_FIRST_FORM: "register-info-first-form",
  REGISTER_INFO_SECOND_FORM: "register-info-second-form",
  REGISTER_PREDICT_FORM: "register-predict-form",
  REGISTER_CHILDREN_COUNT: "register-children-count",
  REGISTER_CHILD_TYPE: "register-child-type",
  REGISTER_CHILDREN_TYPE: "register-children-type",
};

export const langauges = {
  EN: "en",
  AR: "ar",
};

export const toKeys = (enumObject) => Object.entries(enumObject).map(([key]) => key);
