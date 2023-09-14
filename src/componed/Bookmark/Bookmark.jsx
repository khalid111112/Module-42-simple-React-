import PropTypes from 'prop-types';

const Bookmark = () => {
    const {title} = Bookmark;

    return (
        <div>
            <h3 className='text-3xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    Bookmark:PropTypes.object
}

export default Bookmark;