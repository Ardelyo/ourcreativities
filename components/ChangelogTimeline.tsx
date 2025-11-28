<span className="text-gray-500 text-xs font-medium flex items-center gap-1">
    <Calendar size={10} /> {entry.date}
</span>
                        </div >

    {/* Title & Description */ }
    < h3 className = "text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all" >
        { entry.title }
                        </h3 >
    <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {entry.description}
    </p>

{/* Changes List */ }
<ul className={`space-y-2 ${isEven ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
    {entry.changes.map((change, idx) => (
        <li key={idx} className={`flex items-start gap-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors ${isEven ? 'flex-row-reverse text-right' : ''}`}>
            <div className={`mt-1.5 w-1 h-1 rounded-full bg-${entry.color || 'white'} shrink-0`} />
            <span>{change}</span>
        </li>
    ))}
</ul>
                    </div >
                </div >
            </div >

    {/* Empty space for the other side */ }
    < div className = "w-full md:w-1/2" />
        </motion.div >
    );
};
