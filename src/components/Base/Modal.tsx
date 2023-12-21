import type { FC, ReactNode } from "react";

interface BaseModalProps {
  handleClose: () => void;
  title: string;
  children: ReactNode;
}

const BaseModal: FC<BaseModalProps> = ({ handleClose, title, children }) => {
  return (
    <div className="fixed left-0 top-0 z-40 h-screen w-screen bg-slate-800 bg-opacity-70">
      <div className="flex h-full w-full items-center justify-center text-center">
        <div className="inline-block transform overflow-hidden rounded-lg bg-white p-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
          <div className="mb-5">
            <div className="mb-8 flex items-center justify-between">
              <h4 className="text-xl font-medium text-slate-800">{title}</h4>

              <button
                className="text-2xl font-semibold text-slate-300 hover:text-slate-800"
                onClick={handleClose}
              >
                X
              </button>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseModal;
