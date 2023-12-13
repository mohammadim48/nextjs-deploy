import React from 'react';
import { useSelector } from 'react-redux';

function TablesGenerator({ posts }) {
    const { texts } = useSelector((state) => state);

    return (
        <div className="table table-zebra text-right w-full" dir={texts.UnDir} dangerouslySetInnerHTML={{
            __html:
                texts.language === 'FA'
                    ? posts.content
                    : posts.translation.content,
        }} />

    )
}

export default TablesGenerator;