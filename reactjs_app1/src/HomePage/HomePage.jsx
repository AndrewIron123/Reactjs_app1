import { useSelector } from 'react-redux';
import cars1 from '../common/images/cars1.jpg';
import cars2 from '../common/images/cars2.jpg';

function HomePage() {
    const modeValue = useSelector(state => state.modeSwitch.mode);
    return <div className={"page homepage" + (modeValue ? " dark" : "")}>
        <h1>Lorem Ipsum</h1>
        <p>
            <img className="homepage__img1" alt="cars1" src={cars1} />

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed enim aliquet, rhoncus nulla ac, placerat sem. Proin in rutrum libero.
            Etiam laoreet magna finibus semper egestas. Vivamus rutrum odio ac enim consequat luctus. Aenean scelerisque id nunc quis congue.
            Praesent varius dui non nibh volutpat, et hendrerit urna consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas rhoncus lacus et massa scelerisque, gravida commodo nulla aliquet. Vivamus dignissim sed erat et interdum.
            Pellentesque turpis mi, vehicula quis leo non, laoreet maximus ante. Maecenas blandit semper justo, at varius mauris congue id.
            <br />
            <br />


            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed enim aliquet, rhoncus nulla ac, placerat sem. Proin in rutrum libero.
            Etiam laoreet magna finibus semper egestas. Vivamus rutrum odio ac enim consequat luctus. Aenean scelerisque id nunc quis congue.
            Praesent varius dui non nibh volutpat, et hendrerit urna consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas rhoncus lacus et massa scelerisque, gravida commodo nulla aliquet. Vivamus dignissim sed erat et interdum.
            Pellentesque turpis mi, vehicula quis leo non, laoreet maximus ante. Maecenas blandit semper justo, at varius mauris congue id.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed enim aliquet, rhoncus nulla ac, placerat sem. Proin in rutrum libero.
            Etiam laoreet magna finibus semper egestas. Vivamus rutrum odio ac enim consequat luctus. Aenean scelerisque id nunc quis congue.
            Praesent varius dui non nibh volutpat, et hendrerit urna consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas rhoncus lacus et massa scelerisque, gravida commodo nulla aliquet. Vivamus dignissim sed erat et interdum.
            Pellentesque turpis mi, vehicula quis leo non, laoreet maximus ante. Maecenas blandit semper justo, at varius mauris congue id.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed enim aliquet, rhoncus nulla ac, placerat sem. Proin in rutrum libero.
            Etiam laoreet magna finibus semper egestas. Vivamus rutrum odio ac enim consequat luctus. Aenean scelerisque id nunc quis congue.
            Praesent varius dui non nibh volutpat, et hendrerit urna consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas rhoncus lacus et massa scelerisque, gravida commodo nulla aliquet. Vivamus dignissim sed erat et interdum.
            Pellentesque turpis mi, vehicula quis leo non, laoreet maximus ante. Maecenas blandit semper justo, at varius mauris congue id.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed enim aliquet, rhoncus nulla ac, placerat sem. Proin in rutrum libero.
            Etiam laoreet magna finibus semper egestas. Vivamus rutrum odio ac enim consequat luctus. Aenean scelerisque id nunc quis congue.
            Praesent varius dui non nibh volutpat, et hendrerit urna consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas rhoncus lacus et massa scelerisque, gravida commodo nulla aliquet. Vivamus dignissim sed erat et interdum.
            Pellentesque turpis mi, vehicula quis leo non, laoreet maximus ante. Maecenas blandit semper justo, at varius mauris congue id.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed enim aliquet, rhoncus nulla ac, placerat sem. Proin in rutrum libero.
            Etiam laoreet magna finibus semper egestas. Vivamus rutrum odio ac enim consequat luctus. Aenean scelerisque id nunc quis congue.
            Praesent varius dui non nibh volutpat, et hendrerit urna consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas rhoncus lacus et massa scelerisque, gravida commodo nulla aliquet. Vivamus dignissim sed erat et interdum.
            Pellentesque turpis mi, vehicula quis leo non, laoreet maximus ante. Maecenas blandit semper justo, at varius mauris congue id.
            <br />
            <br />
            <img className="homepage__img2" alt="cars2" src={cars2} />

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed enim aliquet, rhoncus nulla ac, placerat sem. Proin in rutrum libero.
            Etiam laoreet magna finibus semper egestas. Vivamus rutrum odio ac enim consequat luctus. Aenean scelerisque id nunc quis congue.
            Praesent varius dui non nibh volutpat, et hendrerit urna consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas rhoncus lacus et massa scelerisque, gravida commodo nulla aliquet. Vivamus dignissim sed erat et interdum.
            Pellentesque turpis mi, vehicula quis leo non, laoreet maximus ante. Maecenas blandit semper justo, at varius mauris congue id.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed enim aliquet, rhoncus nulla ac, placerat sem. Proin in rutrum libero.
            Etiam laoreet magna finibus semper egestas. Vivamus rutrum odio ac enim consequat luctus. Aenean scelerisque id nunc quis congue.
            Praesent varius dui non nibh volutpat, et hendrerit urna consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas rhoncus lacus et massa scelerisque, gravida commodo nulla aliquet. Vivamus dignissim sed erat et interdum.
            Pellentesque turpis mi, vehicula quis leo non, laoreet maximus ante. Maecenas blandit semper justo, at varius mauris congue id.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed enim aliquet, rhoncus nulla ac, placerat sem. Proin in rutrum libero.
            Etiam laoreet magna finibus semper egestas. Vivamus rutrum odio ac enim consequat luctus. Aenean scelerisque id nunc quis congue.
            Praesent varius dui non nibh volutpat, et hendrerit urna consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas rhoncus lacus et massa scelerisque, gravida commodo nulla aliquet. Vivamus dignissim sed erat et interdum.
            Pellentesque turpis mi, vehicula quis leo non, laoreet maximus ante. Maecenas blandit semper justo, at varius mauris congue id.
            <br />
            <br />
        </p>



    </div>
}

export default HomePage;