import { useForm } from 'react-hook-form';

function createTodo() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-lg font-medium text-gray-700">
          Name
        </label>
        <input
          {...register('name', { required: true })}
          id="name"
          type="text"
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label htmlFor="job" className="block text-lg font-medium text-gray-700">
          Job
        </label>
        <input
          {...register('job', { required: true })}
          id="job"
          type="text"
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-lg font-medium text-gray-700">
          Company
        </label>
        <input
          {...register('company', { required: true })}
          id="company"
          type="text"
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label htmlFor="location" className="block text-lg font-medium text-gray-700">
          Location
        </label>
        <input
          {...register('location', { required: true })}
          id="location"
          type="text"
          className="input input-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default createTodo;