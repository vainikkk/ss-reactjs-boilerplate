import * as React from "react";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "@mui/material";
import { useFormik } from "formik";
import BreadCrumbsComponent from "components/common/Breadcrumbs/Breadcrumbs";
import { useDispatch } from "react-redux";
import { setInstanceData } from "store/integration/integrationSlice";
import SSDropdown from "components/common/Select/SSDropdown";
import { nanoid } from "nanoid";
import { intervalOptions } from "assets/constants/options";
import { integrationValidationSchema } from "./validationSchema";

export default function AddIntegration() {
  const { integrationId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      interval: "",
      addigyUserName: "",
      password: "",
      clientId: "",
      clientSecret: "",
    },
    validationSchema: integrationValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      const id = nanoid();
      dispatch(
        setInstanceData({
          ...values,
          integrationId: integrationId,
          instanceId: id,
        })
      );
      navigate(`/integration/${integrationId}/${id}`);
    },
  });

  return (
    <>
      <BreadCrumbsComponent
        title={integrationId}
        displayCrumbs
        subNav="Integration"
      />
      <Container maxWidth="xxl">
        <h1 className="mt-2 mb-2">Instance settings</h1>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Account Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                variant="standard"
                margin="dense"
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
                variant="standard"
                margin="dense"
              />
            </div>
            <div className="mb-4">
              <SSDropdown
                label="Polling Interval"
                options={intervalOptions}
                name="interval"
                id="interval-select-standard-label"
                formik={formik}
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                id="addigyUserName"
                name="addigyUserName"
                label="Addify Username"
                type="text"
                value={formik.values.addigyUserName}
                onChange={formik.handleChange}
                error={
                  formik.touched.addigyUserName &&
                  Boolean(formik.errors.addigyUserName)
                }
                helperText={
                  formik.touched.addigyUserName && formik.errors.addigyUserName
                }
                variant="standard"
                margin="dense"
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                variant="standard"
                margin="dense"
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                id="clientId"
                name="clientId"
                label="Addigy ClientId"
                value={formik.values.clientId}
                onChange={formik.handleChange}
                error={
                  formik.touched.clientId && Boolean(formik.errors.clientId)
                }
                helperText={formik.touched.clientId && formik.errors.clientId}
                variant="standard"
                margin="dense"
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                id="clientSecret"
                name="clientSecret"
                label="Addigy Client Secret"
                value={formik.values.clientSecret}
                onChange={formik.handleChange}
                error={
                  formik.touched.clientSecret &&
                  Boolean(formik.errors.clientSecret)
                }
                helperText={
                  formik.touched.clientSecret && formik.errors.clientSecret
                }
                variant="standard"
                margin="dense"
              />
            </div>

            <Button variant="contained" type="submit">
              Create
            </Button>
            <Button variant="text" onClick={() => navigate(-1)}>
              Cancel
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
