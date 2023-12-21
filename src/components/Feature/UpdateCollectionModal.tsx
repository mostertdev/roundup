import { useEffect, type FC } from "react";

import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "../Base/Modal";
import { type ICollection } from "~/types";
import { api } from "~/_utils/api";

const validationSchema = z.object({
  collectionName: z.string(),
});
type FormData = z.infer<typeof validationSchema>;

interface UpdateCollectionModalProps {
  handleClose: () => void;
  refetch: () => void;
  collection: ICollection;
}

const UpdateCollectionModal: FC<UpdateCollectionModalProps> = ({
  handleClose,
  refetch,
  collection,
}) => {
  const { mutate: updateCollection, isLoading } =
    api.collections.update.useMutation({
      onSuccess: () => {
        refetch();
        handleClose();
      },
    });

  const { register, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    updateCollection({
      id: collection.id,
      ...formData,
    });
  };

  useEffect(() => {
    reset({
      collectionName: collection.name,
    });
  }, []);

  return (
    <Modal handleClose={handleClose} title="Update a Collection">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between space-x-4">
          <input
            type="text"
            placeholder="Collection Name"
            className="w-full rounded-full border border-[#AFB1CC] px-5 py-3 text-base focus:outline-slate-800"
            {...register("collectionName", { required: true })}
          />

          <button
            className="rounded-full bg-slate-800 px-9 py-3 font-semibold text-white hover:bg-slate-900 focus:outline-none"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Save"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateCollectionModal;
