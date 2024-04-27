import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  useAddProductMutation,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../redux/InspireApis";
import { enqueueSnackbar } from "notistack";

const Modal = ({ id, onClose }) => {
  const [addProduct, { isLoading: addLoading }] = useAddProductMutation();
  const [updateProduct, { isLoading: updateLoading }] =
  useUpdateProductMutation();
  const { data: getSingleProduct, } = useGetSingleProductQuery(id)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    discount: "",
    flavorType: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const isValueEmpty = (value) => {
    if (value === null || value === undefined) {
      return true;
    }
    if (typeof value === "string" && value.trim() === "") {
      return true;
    }
    if (Array.isArray(value) && value.length === 0) {
      return true;
    }
    if (typeof value === "object" && Object.keys(value).length === 0) {
      return true;
    }
    return false;
  };
  const handleValidation = () => {
    const { name, price, description, discount, flavorType } = formData;
    if (isValueEmpty(name)) {
      enqueueSnackbar("Name is required", { variant: "error" });
    }
    if (isValueEmpty(price)) {
      enqueueSnackbar("Price is required", { variant: "error" });
    }
    if (isValueEmpty(description)) {
      enqueueSnackbar("Description is required", { variant: "error" });
    }
    if (isValueEmpty(discount)) {
      enqueueSnackbar("Discount is required", { variant: "error" });
    }
    if (isValueEmpty(flavorType)) {
      enqueueSnackbar("Flavor Type is required", { variant: "error" });
    }
    if (name && price && description && discount && flavorType) {
      return false;
    } else {
      return true;
    }
  };
  const handleSubmit = async () => {
    if (handleValidation()) {
      return true;
    }
    const data = {
      "data": {
        name: formData.name,
        price: Number(formData.price),
        detail: formData.description,
        discount: Number(formData.discount),
        flavor: formData.flavorType
      }
    };
    try {
      if (id) {
        await updateProduct({ id: id, data });
        enqueueSnackbar("Product updated successfully", { variant: "success" });
      } else {
        await addProduct(data);
        enqueueSnackbar("Product added successfully", { variant: "success" });
      }
      setFormData({
        name: "",
        price: "",
        description: "",
        discount: "",
        flavorType: "",
      });
    } catch (error) {
      console.error("Error submitting product:", error);
      enqueueSnackbar("An error occurred while processing the product", {
        variant: "error",
      });
    }
  };
  console.log("getSingleProduct data:", getSingleProduct);
  useEffect(() => {
    if (id) {
      setFormData({
        name: getSingleProduct?.data?.attributes?.name,
        price: getSingleProduct?.data?.attributes?.price,
        description: getSingleProduct?.data?.attributes?.detail,
        discount: getSingleProduct?.data?.attributes?.discount,
        flavorType: getSingleProduct?.data?.attributes?.flavor
      })
    }
  }, [getSingleProduct])
  return (
    <div className="fixed flex p-[20px] bg-[#FFF] w-[800px] h-[700px] shadow-[0_4px_20px_1000px_rgba(0,0,0,0.6)] rounded-[10px] flex-col gap-[24px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <div className="flex items-center justify-between">
        <span className="text-[#303031] font-[500] text-[28px]">
          Edit Product
        </span>
        <span onClick={onClose} className="text-[#303031] text-[24px] cursor-pointer">X</span>
      </div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="px-[16px] py-[14px] text-[#303031] bg-[#F9FAFB] outline-none placeholder:text-[#303031] border-[1px] border-[#EDF2F6] rounded-[8px]"
        placeholder="Name"
      />
      <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        className="px-[16px] py-[14px] text-[#303031] bg-[#F9FAFB] outline-none placeholder:text-[#303031] border-[1px] border-[#EDF2F6] rounded-[8px]"
        placeholder="Price"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="px-[16px] py-[14px] text-[#303031] bg-[#F9FAFB] outline-none placeholder:text-[#303031] border-[1px] border-[#EDF2F6] rounded-[8px] h-[200px] resize-none"
        placeholder="Description"
      />
      <div className="flex items-center gap-[16px] w-full">
        <input
          type="number"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          className="w-full px-[16px] py-[14px] text-[#303031] bg-[#F9FAFB] outline-none placeholder:text-[#303031] border-[1px] border-[#EDF2F6] rounded-[8px]"
          placeholder="Discount"
        />
        <input
          type="text"
          name="flavorType"
          value={formData.flavorType}
          onChange={handleChange}
          className="w-full px-[16px] py-[14px] text-[#303031] bg-[#F9FAFB] outline-none placeholder:text-[#303031] border-[1px] border-[#EDF2F6] rounded-[8px]"
          placeholder="Flavor Type"
        />
      </div>
      <div className="flex items-center rounded-[10px] overflow-hidden w-fit relative">
        <div className="bg-[#EFB749] absolute top-2 right-2 rounded-[10px] p-[4px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              d="M2.60372 8.05147L2.10156 10.0601L4.11019 9.55794L9.92807 3.74006C10.3203 3.34786 10.3203 2.71196 9.92807 2.31975L9.84191 2.23359C9.4497 1.84139 8.81381 1.84139 8.4216 2.2336L2.60372 8.05147Z"
              stroke="#303031"
              stroke-width="1.00431"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.60372 8.05282L2.10156 10.0614L4.11019 9.55929L9.13175 4.53772L7.62528 3.03125L2.60372 8.05282Z"
              fill="#303031"
            />
            <path
              d="M7.625 3.03125L9.13147 4.53772"
              stroke="#303031"
              stroke-width="1.00431"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.625 10.0625H10.6423"
              stroke="#303031"
              stroke-width="1.00431"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <img src="https://picsum.photos/id/234/200/200" alt="" />
      </div>
      <div
        className="cursor-pointer text-[#303031] font-[500] flex items-center justify-center p-[12px] bg-[#EFB749] rounded-[8px]"
        onClick={handleSubmit}
      >
        {addLoading || updateLoading ? "Loading..." : "Add New Product"}
      </div>
    </div>
  );
};

export default Modal;
