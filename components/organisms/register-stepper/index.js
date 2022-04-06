import React, { useState } from "react";

import toastError from "components/particles/toast/toastError";

import {
  DescribeYourNeeds,
  RegisterCycleForm,
  RegisterInfoFirstForm,
  RegisterInfoSecondForm,
  RegisterYourKidForm,
  RegisterDueDateForm,
  RegisterPredictForm,
  RegisterChildrenCount,
  RegisterChildrenType,
} from "components/organisms";

import http from "services/http";
import { REGISTER } from "constants/endpoints";

import { toPascalCase } from "helpers/caseConverter";

import { registerPhase, registerView } from "constants/types";

const defaultPhases = [
  { id: registerPhase.TRACK_YOUR_CYCLE, selected: false, completed: false },
  { id: registerPhase.PLAN_YOUR_PREGNANCY, selected: false, completed: false },
  { id: registerPhase.KEEP_UP_WITH_MY_KIDS, selected: false, completed: false },
  { id: registerPhase.TRACK_YOUR_PREGNANCY, selected: false, completed: false },
];

const trackYouCycleIndex = defaultPhases.findIndex(
  (p) => p.id === registerPhase.TRACK_YOUR_CYCLE
);
const planYourPregIndex = defaultPhases.findIndex(
  (p) => p.id === registerPhase.PLAN_YOUR_PREGNANCY
);
const trackYourPregIndex = defaultPhases.findIndex(
  (p) => p.id === registerPhase.TRACK_YOUR_PREGNANCY
);

const RegisterStepper = ({ isDescribeYourNeedsOnly }) => {
  const [phases, setPhases] = useState(defaultPhases);

  const [currentView, setCurrentView] = useState(registerView.DESCRIBE_YOUR_NEEDS);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    birthDay: "",
    countryId: "",
    email: "",
    phone: "",
    password: "",
    AddClientChildren: [],
    addClientTopics: [],
    AddClientFetuse: [],
    addClientPeriod: [],
  });

  const togglePhase = (phase) => {
    const trackYouCycleSelected = phases[trackYouCycleIndex].selected;
    const planYourPregSelected = phases[planYourPregIndex].selected;
    const trackYourPregSelected = phases[trackYourPregIndex].selected;

    if (
      ((phase === registerPhase.TRACK_YOUR_CYCLE ||
        phase === registerPhase.PLAN_YOUR_PREGNANCY) &&
        trackYourPregSelected) ||
      (phase === registerPhase.TRACK_YOUR_PREGNANCY &&
        (trackYouCycleSelected || planYourPregSelected))
    ) {
      toastError(
        "Oops, You cannot track your cycle and track your pregnancy at the same time"
      );
      return;
    }

    const newPhases = [...phases];

    const index = phases.findIndex((p) => p.id === phase);

    newPhases[index] = {
      ...newPhases[index],
      selected: !newPhases[index].selected,
    };

    setPhases(newPhases);
  };

  const completePhase = (phase) => {
    const newPhases = [...phases];

    const index = phases.findIndex((p) => p.id === phase);

    newPhases[index] = {
      ...newPhases[index],
      completed: true,
    };

    setPhases(newPhases);
  };

  const anySelectedPhase = () => {
    if (phases.filter((phase) => phase.selected).length) {
      return true;
    }

    return false;
  };

  const handleRegister = (values) => {
    http.post(REGISTER, toPascalCase(values)).then(() => {});
  };

  const handleNext = (formValues) => {
    const notCompletedPhases = phases.filter((phase) => phase.selected && !phase.completed);

    const phaseToComplete = notCompletedPhases?.[0];

    if (phaseToComplete) {
      if (
        phaseToComplete.id === registerPhase.TRACK_YOUR_CYCLE ||
        phaseToComplete.id === registerPhase.PLAN_YOUR_PREGNANCY
      ) {
        if (currentView === registerView.DESCRIBE_YOUR_NEEDS) {
          const trackYourCycleIndex = phases.findIndex(
            (phase) => phase.id === registerPhase.TRACK_YOUR_CYCLE && phase.selected
          );

          const planYourPregnancyIndex = phases.findIndex(
            (phase) => phase.id === registerPhase.PLAN_YOUR_PREGNANCY && phase.selected
          );

          if (trackYourCycleIndex !== -1 && planYourPregnancyIndex !== -1) {
            const newPhases = [...phases];
            newPhases[trackYourCycleIndex] = {
              ...newPhases[trackYourCycleIndex],
              selected: false,
            };

            setPhases(newPhases);
          }

          setCurrentView(registerView.REGISTER_CYCLE_FORM);
        }

        if (currentView === registerView.REGISTER_CYCLE_FORM) {
          let topicId;

          if (phaseToComplete.id === registerPhase.TRACK_YOUR_CYCLE) {
            topicId = 5;
          }

          if (phaseToComplete.id === registerPhase.PLAN_YOUR_PREGNANCY) {
            topicId = 6;
          }

          setValues((state) => ({
            ...state,
            addClientPeriod: [{ id: 0, ...formValues }],
            addClientTopics: [
              { id: 0, topicId, lastPeriodDate: formValues.periodDate, dueDate: null },
            ],
          }));

          completePhase(phaseToComplete.id);

          if (notCompletedPhases?.[1]) {
            if (notCompletedPhases?.[1].id === registerPhase.KEEP_UP_WITH_MY_KIDS) {
              setCurrentView(registerView.REGISTER_YOUR_KID_FORM);
            }

            if (notCompletedPhases?.[1].id === registerPhase.TRACK_YOUR_PREGNANCY) {
              setCurrentView(registerView.REGISTER_DUE_DATE_FORM);
            }
          } else {
            setCurrentView(registerView.REGISTER_INFO_FIRST_FORM);
          }
        }

        return;
      }

      if (phaseToComplete.id === registerPhase.KEEP_UP_WITH_MY_KIDS) {
        if (currentView === registerView.DESCRIBE_YOUR_NEEDS) {
          setCurrentView(registerView.REGISTER_YOUR_KID_FORM);
        }

        if (currentView === registerView.REGISTER_YOUR_KID_FORM) {
          const newClientTopics = [...values.addClientTopics];
          newClientTopics.push({ id: 0, topicId: 3, lastPeriodDate: null, dueDate: null });

          setValues((state) => ({
            ...state,
            AddClientChildren: formValues.kids,
            addClientTopics: newClientTopics,
          }));

          completePhase(phaseToComplete.id);

          if (
            notCompletedPhases?.[1] &&
            notCompletedPhases?.[1].id === registerPhase.TRACK_YOUR_PREGNANCY
          ) {
            setCurrentView(registerView.REGISTER_DUE_DATE_FORM);
          } else {
            setCurrentView(registerView.REGISTER_INFO_FIRST_FORM);
          }
        }

        return;
      }

      if (phaseToComplete.id === registerPhase.TRACK_YOUR_PREGNANCY) {
        if (currentView === registerView.DESCRIBE_YOUR_NEEDS) {
          setCurrentView(registerView.REGISTER_DUE_DATE_FORM);
        }

        if (currentView === registerView.REGISTER_DUE_DATE_FORM) {
          if (formValues.iDontKnow) {
            setCurrentView(registerView.REGISTER_PREDICT_FORM);
          } else {
            const newClientTopics = [...values.addClientTopics];
            newClientTopics.push({
              id: 0,
              topicId: 2,
              lastPeriodDate: null,
              dueDate: formValues.dueDate,
            });

            setValues((state) => ({
              ...state,
              addClientTopics: newClientTopics,
              addClientPeriod: [
                { id: 0, periodDate: formValues.dueDate, periodLength: 0, cycleLength: 0 },
              ],
            }));

            setCurrentView(registerView.REGISTER_CHILDREN_COUNT);
          }
        }

        if (currentView === registerView.REGISTER_PREDICT_FORM) {
          const newClientTopics = [...values.addClientTopics];
          newClientTopics.push({
            id: 0,
            topicId: 2,
            lastPeriodDate: formValues.lastPeriodDate,
            dueDate: null,
          });

          setValues((state) => ({
            ...state,
            addClientTopics: newClientTopics,
            addClientPeriod: [
              {
                id: 0,
                periodDate: formValues.lastPeriodDate,
                periodLength: 0,
                cycleLength: formValues.cycleLength,
              },
            ],
          }));

          setCurrentView(registerView.REGISTER_CHILDREN_COUNT);
        }

        if (currentView === registerView.REGISTER_CHILDREN_COUNT) {
          if (formValues.childrenCount === 1) {
            const newClientTopics = [...values.addClientTopics];

            const index = newClientTopics.findIndex((act) => (act.opicId = 2));

            newClientTopics[index] = { ...newClientTopics[index], pregnancyType: 1 };

            setValues((state) => ({
              ...state,
              addClientTopics: newClientTopics,
            }));

            setCurrentView(registerView.REGISTER_CHILD_TYPE);
          }

          if (formValues.childrenCount === 2) {
            const newClientTopics = [...values.addClientTopics];

            const index = newClientTopics?.findIndex((act) => (act.opicId = 2));

            newClientTopics[index] = { ...newClientTopics[index], pregnancyType: 2 };

            setValues((state) => ({
              ...state,
              addClientTopics: newClientTopics,
            }));

            setCurrentView(registerView.REGISTER_CHILDREN_TYPE);
          }

          if (formValues.childrenCount === 0) {
            setCurrentView(registerView.REGISTER_INFO_FIRST_FORM);
          }
        }

        if (
          currentView === registerView.REGISTER_CHILDREN_TYPE ||
          currentView === registerView.REGISTER_CHILD_TYPE
        ) {
          setValues((state) => ({
            ...state,
            addClientFetuse: formValues.map((item) => ({ gender: item.gender, id: 0 })),
          }));

          completePhase(phaseToComplete.id);

          setCurrentView(registerView.REGISTER_INFO_FIRST_FORM);
        }

        return;
      }
    }

    if (currentView === registerView.REGISTER_INFO_FIRST_FORM) {
      setValues((state) => ({ ...state, ...formValues }));
      setCurrentView(registerView.REGISTER_INFO_SECOND_FORM);
    }

    if (currentView === registerView.REGISTER_INFO_SECOND_FORM) {
      handleRegister({ ...values, ...formValues });
    }
  };

  const props = {
    phases,
    togglePhase,
    anySelectedPhase,
    onNext: handleNext,
    isDescribeYourNeedsOnly,
  };

  return (
    <>
      {(currentView === registerView.DESCRIBE_YOUR_NEEDS || isDescribeYourNeedsOnly) && (
        <DescribeYourNeeds {...props} />
      )}
      {currentView === registerView.REGISTER_CYCLE_FORM && <RegisterCycleForm {...props} />}
      {currentView === registerView.REGISTER_INFO_FIRST_FORM && (
        <RegisterInfoFirstForm {...props} />
      )}
      {currentView === registerView.REGISTER_INFO_SECOND_FORM && (
        <RegisterInfoSecondForm {...props} />
      )}
      {currentView === registerView.REGISTER_YOUR_KID_FORM && (
        <RegisterYourKidForm {...props} />
      )}
      {currentView === registerView.REGISTER_DUE_DATE_FORM && (
        <RegisterDueDateForm {...props} />
      )}
      {currentView === registerView.REGISTER_PREDICT_FORM && (
        <RegisterPredictForm {...props} />
      )}
      {currentView === registerView.REGISTER_CHILDREN_COUNT && (
        <RegisterChildrenCount {...props} />
      )}
      {currentView === registerView.REGISTER_CHILD_TYPE && <RegisterChildrenType {...props} />}
      {currentView === registerView.REGISTER_CHILDREN_TYPE && (
        <RegisterChildrenType multiChildren {...props} />
      )}
    </>
  );
};

export default RegisterStepper;
