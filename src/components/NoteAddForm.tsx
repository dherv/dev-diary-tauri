import { FC } from 'react';
import {
  FieldError,
  Path,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from 'react-hook-form';

export function Select({ register, options, name }: any) {
  return (
    <select name={name} {...register(name, { required: true })}>
      {options.map((value: string) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

const FormInput: FC<{
  label: Path<any>;
  placeholder: string;
  register: UseFormRegister<any>;
  hiddenLabel?: boolean;
  error?: FieldError;
}> = ({ label, hiddenLabel, placeholder, error, register }) => {
  const errorClass = `border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500`;
  const okClass = `border-gray-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600`;
  return (
    <div className="my-8">
      <label htmlFor={label} hidden={hiddenLabel} className={`font-medium`}>
        {label}
      </label>
      <input
        type="text"
        aria-invalid={error ? "true" : "false"}
        {...register(label, { required: true })}
        className={`
        peer w-full px-4 py-2 mt-2 border-2 border-gray-600 rounded-md text-sm placeholder-gray-400 focus:outline-none transition duration-300 ease-in-out
        ${error ? errorClass : okClass}`}
        placeholder={placeholder}
      ></input>
      <p
        className={`${
          error ? "visible" : "invisible"
        } mt-1 ml-1 text-pink-600 text-xs`}
      >
        {`Please enter a ${label}`}
      </p>
    </div>
  );
};

export const NoteAddForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log({ data });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        name="note_type"
        register={register}
        options={["frontend", "backend", "soft skills"]}
      />

      <FormInput
        hiddenLabel={true}
        error={errors.description}
        placeholder="description"
        label="description"
        register={register}
      />

      <div className="flex">
        <button
          type="submit"
          disabled={Object.values(errors).length > 0}
          className="mt-4 px-4 py-1 ml-auto bg-teal-500 text-white disabled:opacity-50"
        >
          submit
        </button>
      </div>
    </form>
  );
};
