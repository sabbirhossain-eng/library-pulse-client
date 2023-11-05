import PropTypes from 'prop-types';

const BlogCard = ({ blog }) => {
  
    const { img, title, description } = blog;

  return (
    <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
        <img
          src={img}
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h4>
        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};
BlogCard.propTypes ={
    blog: PropTypes.node
}

export default BlogCard;
