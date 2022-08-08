import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAtom } from "jotai";
import { createGroupAtom } from "../../server/atoms";
import { useMutation, trpc } from "../../hooks/trpc";

export const CreateGroupModal: React.FC = () => {
  const [isOpen, setIsOpen] = useAtom(createGroupAtom);
  const { invalidateQueries } = trpc.useContext();

  const mutateGroup = useMutation("group.create", {
    onSuccess() {
      invalidateQueries("group.get-by-user");
    }
  });

  const createGroup = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      groupName: { value: string; }
    };
    
    await mutateGroup.mutateAsync({
      name: target.groupName.value
    });
    setIsOpen(false);

  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <form onSubmit={createGroup}>
                <Dialog.Panel className="max-w-md p-6 overflow-hidden text-left align-middle transition-all transform shadow-xl bg-light-coral rounded-2xl">
                  <div className="flex items-center mb-4">
                    <Dialog.Title
                      as="h3"
                      className="mr-auto text-lg font-medium leading-6 text-left text-white text-gray-900"
                    >
                      Create a group
                    </Dialog.Title>
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <input
                      className="p-3 mr-4 rounded-lg shadow-xl outline-none"
                      name="groupName"
                      placeholder="Name"
                      autoComplete="off"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 text-xl text-center rounded-lg bg-baby-pink"
                    >
                      Create!
                    </button>
                  </div>
                </Dialog.Panel>
              </form>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
